import { useRef, useState, useEffect, useCallback } from 'react';
import { Eraser } from 'lucide-react';

interface ESignaturePadProps {
  value: string; // base64 data URL
  onChange: (dataUrl: string) => void;
  label: string;
  className?: string;
}

export default function ESignaturePad({ value, onChange, label, className = '' }: ESignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const initialized = useRef(false);
  const lastDataUrl = useRef<string>('');

  // Initialize canvas once on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || initialized.current) return;
    initialized.current = true;

    function setupCanvas() {
      const w = container!.clientWidth;
      const h = 120;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + 'px';
      canvas!.style.height = h + 'px';
      const ctx = canvas!.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
      drawGuideLine(canvas!, ctx);
    }

    setupCanvas();

    function handleResize() {
      // Save current drawing before resize
      const dataUrl = canvas!.toDataURL('image/png');
      lastDataUrl.current = dataUrl;

      setupCanvas();
      // Restore drawing
      if (dataUrl && dataUrl !== 'data:,') {
        restoreImage(canvas!, dataUrl);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // When external value changes (e.g., load saved signature), restore it
  useEffect(() => {
    if (!initialized.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Only restore if value differs from what's on canvas
    if (value !== lastDataUrl.current) {
      lastDataUrl.current = value;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      if (value) {
        restoreImage(canvas, value);
      } else {
        drawGuideLine(canvas, ctx);
      }
    }
  }, [value]);

  function restoreImage(canvas: HTMLCanvasElement, dataUrl: string) {
    const img = new Image();
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr);
    };
    img.src = dataUrl;
  }

  function drawGuideLine(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) {
    if (!ctx) {
      ctx = canvas.getContext('2d');
      if (!ctx) return;
    }
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 0.7;
    ctx.setLineDash([5, 7]);
    ctx.beginPath();
    ctx.moveTo(30, h / 2);
    ctx.lineTo(w - 30, h / 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2.5;
    ctx.restore();
  }

  const getPos = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  function startDrawing(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    setIsDrawing(true);
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    if (!isDrawing) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDrawing(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      lastDataUrl.current = dataUrl;
      onChange(dataUrl);
    }
  }

  function clear() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    drawGuideLine(canvas, ctx);
    lastDataUrl.current = '';
    onChange('');
  }

  return (
    <div ref={containerRef} className={`flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-600">{label}</span>
        {value && (
          <button
            onClick={clear}
            className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-red-500 transition-colors px-1.5 py-0.5 rounded hover:bg-red-50"
            title="Clear signature"
          >
            <Eraser size={11} />
            Clear
          </button>
        )}
      </div>
      <div className="relative border-2 border-slate-200 rounded-lg overflow-hidden bg-white hover:border-sky-300 transition-colors cursor-crosshair">
        <canvas
          ref={canvasRef}
          className="w-full block touch-none"
          style={{ height: '120px' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        {!value && (
          <p className="absolute inset-0 flex items-center justify-center text-xs text-slate-300 pointer-events-none select-none">
            Draw your signature here
          </p>
        )}
      </div>
    </div>
  );
}