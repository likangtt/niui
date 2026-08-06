import { useState } from 'react';
import { BookOpen, ChevronDown, Scale, Users, Home, Baby, Heart, PawPrint, MessageCircle, GraduationCap, Fence, Handshake, Key, Receipt, Car, Building } from 'lucide-react';
import { usePageVariant } from '../pageVariant';

interface Article {
  icon: React.ReactNode;
  tag: string;
  title: string;
  paragraphs: string[];
}

const ARTICLES: Article[] = [
  {
    icon: <Scale size={20} />,
    tag: 'Legal & Authority',
    title: 'Is a Free Chore Contract Legally Binding for Roommates?',
    paragraphs: [
      'A written roommate agreement or chore contract operates as a form of private civil contract between co-tenants. While courts in most jurisdictions will not dispatch a judge to enforce daily dishwashing schedules, a properly signed peer-to-peer roommate agreement holds meaningful practical and legal weight. When both parties sign a clearly written document detailing shared responsibilities, that agreement becomes tangible documentary evidence of mutual intent. In the event of a deposit dispute, property damage disagreement, or landlord-mediated conflict, a signed chore contract can be submitted as supporting evidence in small claims court proceedings. Many magistrates and mediators rely heavily on written records when assessing whether a tenant acted in good faith with regard to property maintenance obligations.',
      'The legal legitimacy of a free roommate contract is further reinforced by the fundamental principles of contract law: offer, acceptance, and mutual consideration. When Roommate A and Roommate B both voluntarily sign an agreement that establishes equitable household responsibilities, the document demonstrates a clear bilateral understanding. Should a landlord initiate a deduction from the security deposit citing general uncleanliness or damage, the existence of a signed chore rotation agreement can serve as powerful counter-evidence that both residents had structured, documented protocols in place. In small claims court cases involving deposit losses or property damage — a common student renter and young professional friction point — even an informal but signed written agreement has been cited as evidence of reasonable household management. The barrier to protection is simply documentation.',
    ],
  },
  {
    icon: <Users size={20} />,
    tag: 'Practical Value',
    title: 'How to Fair-Share Apartment Cleaning Without Starting a Drama',
    paragraphs: [
      'The single most common source of roommate conflict is not personality differences or noise complaints — it is the accumulation of unspoken expectations about who cleans what and when. The most effective tactical solution to this universal co-living friction point is the establishment of a formal, written chore rotation chart signed by all residents before the lease begins. A structured rotation should assign specific tasks — kitchen deep-cleaning, bathroom scrubbing, floor mopping, trash runs, and appliance wipe-downs — to specific residents on a weekly or bi-weekly cycle. Setting explicit cleaning intervals (for example, "shower and toilet deep-cleaned every Sunday before noon") eliminates the subjectivity that fuels passive-aggressive behavior. When the standard is written and mutually acknowledged, no resident can claim ignorance, and no resident needs to feel like the sole enforcer.',
      'Beyond the chore chart itself, eliminating the passive-aggressive text chain is one of the highest-value outcomes of a signed accountability framework. Without a written document, cleaning reminders default to informal messages — texts, notes, verbal requests — all of which carry an inherent social cost and tend to escalate emotionally over time. A signed chore contract substitutes personal pressure with a neutral, pre-agreed standard that both parties endorsed willingly. When a kitchen counter goes unwiped, the response is not "Can you please clean up after yourself?" — a phrase virtually guaranteed to generate defensiveness — but rather a quiet reference to Section 1 of the agreement that both residents already signed. This transforms a personal confrontation into an administrative reminder, dramatically reducing interpersonal tension and protecting the long-term quality of the shared living relationship.',
    ],
  },
  {
    icon: <Home size={20} />,
    tag: 'Social Boundaries',
    title: 'Setting House Rules: Fridge Boundaries and Overnight Guest Policies',
    paragraphs: [
      'Two of the highest-friction areas in any shared apartment are refrigerator boundaries and overnight guest frequency, yet they are the areas least likely to be discussed explicitly before move-in day. Unauthorized consumption of a roommate\'s food — reaching for someone\'s labeled yogurt or finishing the last of a shared condiment without replacing it — triggers a disproportionately strong emotional response because it is experienced as a violation of personal space and financial fairness simultaneously. Establishing a formal Fridge Treaty that designates shelf ownership, shared pantry items, and a monthly rotation schedule for restocking common supplies like toilet paper, dish soap, and trash bags eliminates the guesswork that causes passive resentment. When responsibilities are pre-assigned in writing and signed, residents are no longer relying on social pressure or goodwill to enforce fairness — the document does it for them.',
      'Overnight guest policies represent an equally high-stakes boundary because they directly affect sleep quality, bathroom access, personal comfort, and long-term mental health in a shared living environment. The presence of frequent or unannounced overnight guests disrupts the established domestic rhythm of the household and can make non-hosting residents feel like uninvited guests in their own home. Clearly documented guest rules — such as limiting overnight stays to a maximum of two nights per week and requiring 24-hour advance notice — set expectations transparently before any tension arises. Similarly, enforcing quiet hours from 10:00 PM to 7:00 AM daily provides a documented standard that protects every resident\'s right to rest, a non-negotiable prerequisite for academic performance, professional productivity, and general well-being. When these policies are signed and formalized before conflicts arise, they function as a proactive shield rather than a reactive punishment, making them dramatically more effective at preserving roommate harmony over the long term.',
    ],
  },
  {
    icon: <Baby size={20} />,
    tag: 'Kids & Chores',
    title: 'Chore Chart for Kids by Age: What Household Tasks Can a 5, 8, or 12-Year-Old Actually Handle?',
    paragraphs: [
      'One of the most common questions parents ask is whether their child is old enough to start contributing to household chores — and the answer, according to child development experts, is that children as young as two or three can begin with simple, supervised tasks. The key is matching the chore to the developmental stage. For preschoolers aged 3 to 5, age-appropriate chores include putting toys back in a designated bin, placing dirty clothes in a hamper, wiping baseboards with a damp cloth, and helping to set the table with unbreakable items. These early tasks are not about achieving a perfectly clean house — they are about building the neural pathway that connects "I live in this home" with "I contribute to this home." An age-appropriate chore list printable hung on the refrigerator gives even the youngest children a visual reference and a sense of ownership over their small domain.',
      'For elementary-aged children between 6 and 9, the chore repertoire expands significantly. At this stage, kids can make their own bed each morning, sort laundry by color, sweep floors with a child-sized broom, empty small trash bins, feed pets under supervision, and help put away groceries. A kids responsibility chart by age that clearly shows daily and weekly tasks gives children a predictable routine and eliminates the parent-child power struggle that emerges when chores feel arbitrary or imposed in the moment. By age 10 to 13, pre-teens can handle vacuuming, loading and unloading the dishwasher, folding and putting away their own laundry, preparing simple meals like sandwiches or scrambled eggs, and cleaning bathroom sinks and mirrors with non-toxic products. The long-term payoff is significant: research consistently shows that children who grow up with structured household responsibilities develop stronger executive function skills, higher self-esteem, and a more resilient work ethic than peers who were not expected to contribute. A free printable chore chart for kids by age makes this system visible, consistent, and — most importantly — non-negotiable, because the chart, not the parent, becomes the authority.',
    ],
  },
  {
    icon: <Heart size={20} />,
    tag: 'Couples & Marriage',
    title: 'Chore Contract for Couples: Why Putting Household Duties in Writing Actually Saves Relationships',
    paragraphs: [
      'The idea of a written household chore contract between romantic partners sounds clinical — even unromantic — to many couples. Yet relationship therapists and marriage counselors increasingly recommend formalized domestic labor agreements precisely because the alternative has proven so destructive. Studies consistently identify unequal division of household labor as one of the top three predictors of relationship dissatisfaction, ranking alongside financial disagreement and infidelity. The problem is not laziness — it is the asymmetry of awareness. One partner genuinely does not perceive the pile of laundry, the sticky kitchen counter, or the overflowing recycling bin as urgent, while the other partner experiences each undone task as a micro-violation of the shared domestic contract. A written chore accountability contract bridges this perception gap by defining what "done" looks like for both parties, removing ambiguity from the equation entirely.',
      'The most effective couples chore agreements go beyond simply listing tasks — they assign ownership, set frequency standards, and establish a non-confrontational check-in cadence. For example, rather than "clean the kitchen," a well-written domestic chore contract specifies "Partner A: wipe all kitchen counters, load and start dishwasher, take out trash every Monday, Wednesday, and Friday evening before 9 PM. Partner B: sweep and mop kitchen floor, clean stovetop, restock paper towels every Tuesday, Thursday, and Saturday." This level of specificity eliminates the "I thought you were going to do it" conversation that erodes goodwill over time. Crucially, the written agreement transforms household accountability from a personal nagging dynamic into an objective, mutually endorsed system. When the chore chart says it is your turn to scrub the bathroom, it is not your spouse asking — it is the agreement you both signed asking. That distinction preserves emotional safety, reduces defensive reactions, and protects the romantic dimension of the relationship from being contaminated by domestic logistics. For couples on the brink of chore-related resentment, a structured household chore agreement template is not a sign of relationship failure — it is a tool of relationship preservation.',
    ],
  },
  {
    icon: <PawPrint size={20} />,
    tag: 'Pets & Shared Living',
    title: 'Pet Addendum for Renters: How to Create a Roommate Pet Agreement That Everyone Signs',
    paragraphs: [
      'Moving into a shared apartment with a pet — whether it is your own, your roommate\'s, or a jointly adopted animal — introduces a layer of legal, financial, and interpersonal complexity that standard lease agreements rarely address. A pet addendum rental agreement template designed specifically for roommate situations fills this gap by documenting precisely who is responsible for the animal\'s daily care, veterinary expenses, property damage liability, and end-of-lease obligations before any disputes arise. Without a signed pet responsibility contract, seemingly minor disagreements — who pays when the dog chews the baseboard, who handles the 6 AM walk on a rainy Saturday, whose turn it is to buy the $80 bag of prescription dog food — can escalate into resentment that poisons the entire co-living dynamic.',
      'A comprehensive roommate pet agreement should address at minimum seven elements: (1) designated ownership — is the pet owned by one resident or jointly, and what happens to the animal if one roommate moves out; (2) daily care rotation — a clear weekly schedule for feeding, walking, litter box cleaning, and grooming that rotates fairly between all residents; (3) veterinary expense sharing — whether routine checkups, vaccinations, and emergency medical costs are split equally or borne solely by the pet owner; (4) pet damage liability — explicit documentation that damage caused by the pet to walls, flooring, doors, or furniture is the financial responsibility of the pet owner, not shared among all roommates; (5) guest and noise policies — rules about barking during quiet hours, pet interactions with guests, and off-limit areas like bedrooms of non-pet-owning roommates; (6) pet deposit and pet rent — clear documentation of who paid the pet deposit and who will receive the refund upon lease termination; and (7) an emergency plan — designated pet sitters or boarding arrangements if the primary caregiver travels. When all residents sign a pet policy for shared housing before move-in day, the document functions as a pre-resolved conflict, preventing the slow accumulation of unspoken grievances that erode trust between co-tenants who otherwise get along perfectly well.',
    ],
  },
  {
    icon: <MessageCircle size={20} />,
    tag: 'Conflict Resolution',
    title: 'How to Deal With a Passive-Aggressive Roommate Without Making It Weird: The Conversation Script That Works',
    paragraphs: [
      'The passive-aggressive roommate is a universally recognized archetype in shared housing — the person who leaves sticky notes on the microwave ("Please clean up after yourself :)" with a smiley face that feels more threatening than friendly), sends group texts that begin with "Not to be that person, but...", or silently moves your wet laundry from the washing machine to a crumpled pile on top of the dryer without saying a word. Passive-aggressive roommate behavior is uniquely corrosive because it combines genuine frustration with an avoidance of direct communication, leaving the recipient feeling simultaneously criticized and denied the opportunity to respond. The psychology behind this behavior is not malice — it is usually anxiety about confrontation, fear of being perceived as difficult, or a learned communication pattern from a family environment where direct requests were punished.',
      'The most effective de-escalation script for passive-aggressive roommate communication follows a three-step framework called "Name, Frame, Invite." Step one — Name the observation neutrally and in person, never over text: "Hey, I noticed the note you left about the dishes this morning." Step two — Frame your own intent without accusation: "I want to make sure we are on the same page about kitchen cleanup because I genuinely want this to be a comfortable living situation for both of us." Step three — Invite collaboration toward a documented solution: "Would you be open to sitting down for ten minutes and putting together a simple written chore agreement so neither of us has to keep reminding the other? That way we have one reference point and neither of us has to feel like the bad guy." The shift from "you need to clean more" to "let\'s build a system we both agree on" is the difference between escalating roommate conflict and resolving it permanently. A signed roommate cleaning agreement removes the emotional labor from household management entirely — neither party needs to monitor, remind, or passive-aggressively hint, because the document speaks for itself. For shared housing situations where the relationship matters, this proactive approach to roommate conflict resolution preserves not just a clean apartment, but a genuine friendship.',
    ],
  },
  {
    icon: <GraduationCap size={20} />,
    tag: 'Student & First-Time Renter',
    title: 'First-Time Renter\'s Guide to Roommate Agreements: What Every College Student Needs Before Move-In Day',
    paragraphs: [
      'For the vast majority of college students and young adults, signing a first apartment lease represents their inaugural entry into legally binding contracts — and most enter the experience dangerously under-prepared for the interpersonal dynamics that follow. A standard lease agreement covers the landlord-tenant relationship: rent amount, due date, maintenance responsibilities, and eviction conditions. It does not cover the roommate-roommate relationship, which is where 90% of first-time renter stress actually originates. Students who move in without a written roommate agreement are essentially gambling that their unspoken expectations about cleanliness, noise, guests, bills, and shared supplies will perfectly align with those of a person they may have only known socially — a bet that fails more often than it succeeds.',
      'A college roommate agreement template should address at minimum five categories before move-in day. First, cleaning and chore expectations — not vague statements like "keep it clean," but specific frequency and ownership assignments for kitchen, bathroom, living room, and trash duty. Second, financial logistics — how rent and utilities are split, who physically pays each bill, when Venmo requests must be settled, and what happens to shared household supply costs like toilet paper, paper towels, and cleaning products. Third, guest and overnight visitor policies — how many nights per week a significant other can stay, whether advance notice is required, and what happens during exam weeks when everyone needs quiet study conditions. Fourth, personal property boundaries — which kitchen items, electronics, and furniture are shared versus off-limits, and the reimbursement process if something shared gets broken. Fifth, a conflict resolution clause — an agreement that if issues arise, both parties commit to a face-to-face conversation within 48 hours rather than letting resentment fester for weeks. A signed student housing roommate contract transforms the move-in experience from a high-risk social experiment into a structured, transparent co-living arrangement. For students balancing academics, part-time jobs, and social lives, the mental bandwidth saved by not having to navigate unspoken domestic conflict is genuinely transformative — it is the difference between a semester of quiet resentment and a semester where the apartment actually feels like home.',
    ],
  },
  {
    icon: <Fence size={20} />,
    tag: 'Neighbor Relations',
    title: 'Neighbor Boundary Agreements: What Happens When a Tree, a Fence, or a Parking Spot Turns Neighbors Into Enemies',
    paragraphs: [
      'In 2024, a suburban couple in Austin, Texas spent $18,000 in legal fees fighting their next-door neighbor over a 60-year-old oak tree whose branches crossed the property line and dropped leaves into the neighbor\'s pool. The dispute dragged on for 14 months, involved three mediation sessions, and permanently destroyed what had been a cordial 12-year neighbor relationship. The irony? A one-page neighbor boundary agreement signed when the pool was installed could have prevented the entire conflict. Neighbor disputes are uniquely toxic because unlike roommate conflicts — which have a natural end date when the lease expires — you cannot easily walk away from the person who lives 15 feet from your bedroom window. The financial and emotional cost of unresolved neighbor tension far exceeds the 20 minutes it takes to draft and sign a mutual understanding document.',
      'A practical neighbor boundary agreement should cover property line demarcation, tree and vegetation maintenance, fence responsibility and cost-sharing, parking and driveway usage, noise and hours-of-operation expectations, and a simple dispute resolution process (written notice → face-to-face conversation → neutral third-party mediator). When both homeowners sign a free printable neighbor agreement, everyone wins: property values are protected, anxiety is reduced, and what could have been a $18,000 legal battle remains an amicable 20-minute conversation. Here is exactly what goes into a legally structured neighbor agreement that actually works in real suburban and urban American settings.',
    ],
  },
  {
    icon: <Handshake size={20} />,
    tag: 'Personal Lending',
    title: 'Personal Lending Contract Between Friends: How to Lend Money Without Destroying a Relationship',
    paragraphs: [
      'Lending money to a friend feels simple at the moment — but it becomes complicated the moment repayment is late. A personal lending contract between friends preserves the relationship precisely because it eliminates ambiguity. By documenting the loan amount, repayment schedule, interest terms (if any), and consequences of late payment, both parties operate from the same set of clear expectations rather than relying on memory and goodwill. A formal lending agreement between individuals does not need to be hostile or bureaucratic — it can be a simple one-page document signed by both parties that functions as a shared reference point.',
      'The key elements of a personal lending contract between friends include: the principal amount loaned, the date of disbursement, the repayment schedule (lump sum or installment), any interest rate (some states require minimum interest to avoid gift tax implications), late payment penalties, early repayment terms (whether prepayment is allowed without penalty), and what happens in the event of default. When both parties sign before the money changes hands, the lender is protected and the borrower knows exactly what is expected. This clarity reduces anxiety for both sides and protects the friendship from the primary cause of money-related relationship damage: unspoken assumptions about repayment timing and terms.',
    ],
  },
  {
    icon: <Key size={20} />,
    tag: 'House Sitting',
    title: 'House Sitting Agreement Template: Protect Your Home and Your Sitter With a Simple Contract',
    paragraphs: [
      'When you trust someone with your home — whether for a weekend trip or an extended vacation — a simple written house sitting agreement protects both you and your house sitter. Without a written document, expectations around mail collection, plant watering, pet care, appliance usage, and liability for accidental damage are left to vague verbal agreements that inevitably miss critical details. A house sitting contract template documents the house sitter\'s responsibilities, access instructions, emergency contacts, pet care protocols, utility responsibilities, and liability limitations.',
      'Essential clauses in a house sitting agreement include: dates and times of the sitting period, specific daily responsibilities (mail collection, plant watering, pet feeding and walking, trash disposal), emergency procedures and contact information, permission for the sitter to have guests, liability for damage caused by the sitter, reimbursement for supplies purchased, and the sitter\'s right to quiet enjoyment of common areas. A signed house sitting contract transforms the experience from an informal favor into a professional arrangement where both parties feel secure and respected.',
    ],
  },
  {
    icon: <Receipt size={20} />,
    tag: 'Budget & Finance',
    title: 'High US Rent Inflation Makes Shared Living Necessary: Split Expense Contract Tips for 2026 Budget-Conscious Renters',
    paragraphs: [
      'Let\'s keep it real: rent in 2026 is wild. Prices keep going up, wages aren\'t keeping up, and more Americans than ever are moving in with roommates just to stay afloat. If you\'re trying to save cash, survive rent hikes, and avoid turning your living situation into a total nightmare, you need more than just a handshake. You need a written shared expense plan — simple, fair, and signed by everyone. No fancy legal talk. Just real-life rules that actually work for regular people. Here\'s what you actually need in your expense-splitting contract this year. First, lock down rent deadlines before someone flakes — your contract should say how much each person pays, due by the 1st of the month, a 3-day grace period max, and a $50 late fee if they drop the ball. This isn\'t being dramatic — it\'s how you don\'t get burned. Second, split utilities fairly so no one gets stuck with the bill. Electricity, gas, internet, water — everything\'s more expensive in 2026. Write this down: all utilities split 50/50, due by the 5th of every month, and whoever pays the bill sends a screenshot as proof. No surprises. No arguments. No "I thought you had it."',
      'Third, household supplies should rotate — don\'t let one person buy everything. Toilet paper, paper towels, trash bags, dish soap — it adds up fast, and the same person always ends up buying. Fix it by listing shared supplies, rotating who buys each month, and keeping it casual but clear. No more "you owe me $12" texts every week. Fourth, guests cost extra — don\'t let them crash your budget. If your roommate\'s partner is over 4 nights a week, they\'re using hot water, electricity, and space. Your rule: overnight guests max 2 nights in a row, longer stays mean extra cash toward utilities, and all roommates must agree. Simple. No hard feelings. Just real-life logic. Fifth, have a move-out rule so you don\'t get left holding the bag. People move more than ever in 2026 — chasing cheaper rent, new jobs, better situations. But if someone bails without notice, you could be stuck paying full rent alone. Your contract must say: 30 days written notice to move out, they still pay rent during that time, and security deposit rules clear and signed. This keeps you from getting screwed over.',
      'Why You Actually Need a Written Contract: Look — verbal deals work until money gets tight. Then people get defensive, memories get fuzzy, and suddenly you\'re in a fight over $47. A shared expense contract isn\'t about being "legal." It\'s about not arguing over Venmo requests, protecting your credit, keeping the peace, and sticking to your budget. In 2026, shared living isn\'t a preference — it\'s a budget necessity. But you can do it without stress, drama, or resentment. Make your free shared expense plan in 60 seconds — you don\'t need a lawyer. You don\'t need to sign up. Just use our 100% free shared expense contract builder, made for real American renters dealing with 2026 rent prices. Customize it, print it, sign it, and be done with it. Stop letting rent inflation ruin your budget and your vibe. Get a fair expense-splitting deal today.',
    ],
  },
  {
    icon: <MessageCircle size={20} />,
    tag: 'Roommate Life',
    title: '5 Friction-Free Ways to Divide Chores with Roommates (Without Becoming the Bad Guy)',
    paragraphs: [
      'Let\'s be honest — you did not sign up for this. You signed a lease, split the security deposit, and maybe shared a pizza on moving day. You did NOT sign up for the 47 unanswered group texts about the towering pile of dirty dishes in the sink, the mysterious disappearance of your oat milk (again), or the passive-aggressive sticky note on the microwave that reads "Whoever left this mess — please clean up after yourself :)" with a smiley face that feels anything but friendly. If this hits close to home, you are not alone. The #1 cause of roommate conflict in shared apartments across America isn\'t loud music or stolen clothes — it\'s the slow, grinding friction of uneven household chores. The good news? You can fix it without becoming "the bad guy." You just need a system, a little bit of structure, and a free chore contract that does the heavy lifting for you.',
      'Why Verbal Agreements Always Fail — and Why Everyone Ends Up Resentful: You and your roommate sat down on day one and agreed: "Yeah, we\'ll both just keep things clean, no big deal." Sounds reasonable, right? Except your definition of "clean" might mean bleach-scrubbed counters and vacuum lines on the carpet, while theirs means "I moved the cereal box from the table to the counter." That gap — the gap between deep cleaning and light wiping — is where 90% of roommate resentment is born. One person feels like the unpaid building super. The other genuinely believes they are pulling their weight. Without a written standard, both roommates are right in their own heads, and wrong in reality. A chore agreement template solves this by putting the standard in writing, not in feelings.',
      'The Psychology of a Visual Contract — Why Writing It Down Changes Everything: Here is something psychologists and behavioral economists agree on: people follow written agreements more reliably than spoken ones. Not because they are more "legal" — but because writing something down makes it real. When you and your roommate both sign a free chore contract and stick it on the fridge with a magnet, something shifts. That piece of paper becomes a neutral third party. When the kitchen counters are sticky on your roommate\'s cleaning day, you are not nagging them — the contract is. Studies in behavioral science call this "commitment consistency bias": once someone signs their name to a document, they are psychologically more likely to follow through, even if nobody is watching. And for the roommate who tends to "forget" — a visual chart pinned to the wall serves as a gentle daily reminder that requires zero awkward conversations. Print it out. Hang it up. Watch the dynamic shift.',
      'Practical Steps to Divide Chores Evenly — Rotation vs. Zone System: There are two main ways to divide household chores that have been tested by millions of roommates across America, and both work — as long as they are written down and signed. Option one is the Rotation System: every week, residents rotate through task categories. Week one: you clean the bathroom and your roommate handles the kitchen. Week two: you swap. Option two is the Zone Assignment System: each resident owns specific common areas permanently. You own the kitchen — full stop. Your roommate owns the bathroom and the living room. Which one is better for your household depends on your personalities. If one of you is a deep-cleaner and the other is a surface-wiper, zones might create more resentment because the deep-cleaner will always feel like they are doing harder work. In that case, a rotating schedule — where both people eventually do every task — tends to feel fairer over time. Here is the rule of thumb: if one common area (say the kitchen) is significantly more work, rotate it. For equal-effort spaces, zones work great. Either way, get it into your roommate chore list before week two of the lease. The first month is the honeymoon period; after that, habits calcify and change gets harder.',
      'The CTA — Build Your Free Chore Contract in 60 Seconds: Here is the part where we stop talking and start doing. Head over to freechorecontract.com, pick your document type (Chore Contract, Fridge Treaty, Pet Addendum, or Shared Expense Plan), fill in your names and household rules, and hit print. No email required. No credit card. No signup. No "create an account to download." Just a clean, printable, legally structured chore agreement template that you and your roommate can sign tonight and stick on the fridge before the next dirty dish even hits the sink. Your apartment will be cleaner, your friendship will stay intact, and you will never have to send another passive-aggressive group text again.',
    ],
  },
  {
    icon: <Building size={20} />,
    tag: 'Landlord & Tenant',
    title: 'The Live-In Landlord vs. Tenant Power Dynamic: How to Navigate Chore Contracts in "House Hacking" Homes',
    paragraphs: [
      'In the current US housing market, a massive shift has taken place. With mortgage rates hovering at stubborn highs and home prices remaining elevated, a new generation of homeowners has turned to "house hacking" to survive. A significant percentage of Millennial and Gen Z buyers in metropolitan areas like Austin, Denver, and Atlanta are now live-in landlords — purchasing a home and immediately renting out the spare bedrooms to roommates to cover their monthly mortgage payments. While this setup is a financial win-win, it introduces a highly volatile social dynamic. When your roommate is also the person who signs your lease and owns the equity in the property, a simple dispute over unwashed dishes or a dirty bathroom can quickly escalate into a legal or emotional crisis. To prevent domestic warfare, a specialized Live-In Landlord Chore Contract is required.',
      'Case Study 1: The Micromanaging Homeowner — Jessica (31) bought a three-bedroom townhouse in Charlotte, NC. To help pay her $2,800 monthly mortgage, she rented a room to Mark (26) for $950 a month. They verbally agreed to "split chores evenly." Within two months, resentment boiled over. Because Jessica owned the house, she had an incredibly high emotional and financial attachment to keeping it pristine. She expected the quartz countertops to be wiped down with a specific granite cleaner immediately after every meal. Mark, who viewed himself as a paying tenant, felt he was being treated like a child. He preferred to do his dishes once a day in the evening. The Resolution via Contract: Jessica and Mark sat down and drafted a formal chore contract that removed emotion from the equation. Instead of vague standards, they defined the "Baseline Clean" — a mutually agreed level of cleanliness that satisfied both the owner\'s high standards and the tenant\'s comfort level. They also agreed that if Jessica mandated premium cleaning products, she would absorb 100% of the cost for those specific supplies, rather than splitting them 50/50.',
      'Case Study 2: The "Property Maintenance" Trap — David owned a single-family home with a large yard in Seattle, WA, and rented the basement apartment to Chloe. Their informal agreement stated they would share "household upkeep." When summer arrived, the lawn grew out of control. David asked Chloe to spend her Saturday morning mowing the lawn and weeding the garden. Chloe flatly refused, arguing that landscaping and lawn care constitute property maintenance that enhances the long-term equity of David\'s asset, not a daily "household chore." The Resolution via Contract: Had they used a structured contract from day one, this would have been avoided. In a professional live-in landlord setup, Chores (daily cleanliness) must be strictly separated from Maintenance (property value upkeep). Standard chore contracts for this dynamic state that heavy outdoor work (lawn mowing, gutter cleaning, HVAC filter replacement) is the landlord\'s responsibility. If the landlord wants the tenant to do it, it must be treated as a financial transaction — for instance, offering a $75 rent credit per month in exchange for lawn maintenance.',
      'Crucial Clauses for a Live-In Landlord Chore Contract — If you are renting a room from a homeowner, or if you are a homeowner taking in tenants, your chore agreement cannot look like a standard college dorm contract. It must include these specific protections: (1) The Equity vs. Rent Distinction — the contract must explicitly state that chores are performed to maintain a sanitary and comfortable living environment, not to improve the property\'s structural value. Example clause: "Tenant is responsible for sweeping and mopping the kitchen floor weekly. Tenant is not responsible for resealing tiles, fixing plumbing leaks, or repairing appliances, which fall under Landlord Maintenance." (2) Supply Cost Allocation — who pays for vacuum bags, dishwasher detergent, and trash bags? Rule of thumb: if the landlord mandates specific premium cleaning products to protect their high-end finishes, the landlord should absorb the cost. If standard products are used, costs should be split equitably. (3) Right to Hire Professional Help — what happens if a party consistently fails to do their chores? A landlord cannot easily "evict" a roommate over a dusty living room without serious legal headaches. Include a Professional Cleaning Clause: "If either party fails to complete their assigned weekly chore within a 48-hour grace period, the other party has the right to hire a professional cleaning service for that specific area, with the cost billed directly to the non-compliant party (or deducted from the security deposit, where legally permissible)."',
      'FAQ — Can a landlord evict a tenant for not doing chores? In most US states, standard landlord-tenant laws protect tenants from immediate eviction over minor lifestyle disputes like chores. However, if the chore violation creates a health hazard (e.g., attracting rodents or causing mold), it can be categorized as a lease violation. Having a signed chore contract attached as an addendum to the lease gives the landlord much stronger legal footing. How do we handle cleaning when guests stay over? The contract should state that if either party hosts guests for more than 48 hours, that party assumes 100% responsibility for cleaning up after their guests immediately, including extra bathroom cleaning and trash disposal. House hacking is one of the smartest financial moves you can make in today\'s economy, but it only works if domestic boundaries are crystal clear. Don\'t let a dirty kitchen counter jeopardize your mortgage income or your tenant\'s right to quiet enjoyment. Use our interactive Live-In Landlord Chore Contract Generator to create a legally compliant, socially balanced agreement that keeps the peace and protects your property. Customizing your agreement takes less than five minutes, but it saves months of awkward kitchen confrontations.',
    ],
  },
];

function transformArticlesForFamily(articles: Article[]): Article[] {
  return articles.map(article => ({
    ...article,
    title: article.title.replace(/Residents/g, 'Family Members').replace(/residents/g, 'family members'),
    paragraphs: article.paragraphs.map(p =>
      p.replace(/Residents/g, 'Family Members').replace(/residents/g, 'family members')
    ),
  }));
}

export default function Articles() {
  const pageVariant = usePageVariant();
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const articles = pageVariant === 'family' ? transformArticlesForFamily(ARTICLES) : ARTICLES;

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="no-print max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">
          <BookOpen size={14} />
          Knowledge Base
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
          {pageVariant === 'family' ? 'Family &amp; Household Agreement Guide' : 'Roommate &amp; Household Agreement Guide'}
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          {pageVariant === 'family'
            ? 'Expert guidance on family chore contracts, kids responsibility charts, couples household division, pet agreements, and conflict resolution strategies that actually work.'
            : 'Expert guidance on co-living contracts, kids chore education, couples household division, pet agreements, and conflict resolution strategies that actually work.'}
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {articles.map((article, i) => {
          const isOpen = openIndexes.has(i);
          return (
            <div
              key={i}
              className={`rounded-2xl border border-slate-800/50 overflow-hidden transition-colors duration-200 ${
                i % 2 === 0
                  ? 'bg-black border-slate-800/30'
                  : 'bg-slate-900 border-slate-800/50'
              }`}
            >
              {/* Clickable header */}
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    {article.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold tracking-widest text-sky-400/80 uppercase block">
                      {article.tag}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-100 leading-snug mt-1 group-hover:text-sky-300 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-slate-500 transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-sky-400' : ''
                  }`}
                />
              </button>

              {/* Collapsible content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4 border-t border-slate-700/30 pt-4">
                  {article.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm text-slate-400 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Standalone article: Domestic Arrangements Framework */}
      <article className="mt-12 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900 to-black overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4">
            <BookOpen size={14} />
            Household Framework
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-6 leading-snug">
            Beyond Chores: Designing a Formal Domestic Arrangements Framework for Your Household
          </h2>

          {/* Content */}
          <div className="space-y-5 text-sm text-slate-400 leading-relaxed">
            <p>
              When we hear the word "chores," we often picture a messy room, a grumpy teenager, and a frustrated parent yelling from the hallway. It feels trivial, emotional, and exhausting. However, managing a modern household is not just about vacuuming carpets or washing dishes—it is about managing an ecosystem. In professional and legal circles, this isn't called a "chore list." It is referred to under a much more accurate and empowering term: <strong className="text-slate-300">domestic arrangements</strong>.
            </p>
            <p>
              Whether you are running a busy family household with kids, co-parenting, or managing a shared living space with roommates, establishing a formal framework for your household duties is the single most effective way to eliminate friction. If you came here searching for a legitimate <strong className="text-slate-300">domestic arrangements pdf free download</strong>, this comprehensive guide will explain the psychology behind structured household agreements and show you how to leverage a professional <strong className="text-slate-300">chore contract template</strong> to bring order to your home.
            </p>

            <hr className="border-slate-800/50 my-6" />

            <h3 className="text-lg font-bold text-slate-200 mb-3">What Exactly Are "Domestic Arrangements"?</h3>
            <p>
              In social and psychological studies, <strong className="text-slate-300">domestic arrangements</strong> refer to the explicit or implicit agreements made between people living together regarding financial contributions, household labor, and shared responsibilities. Most families rely on <em className="text-slate-300">implicit</em> arrangements—assumptions that "someone will eventually clean the bathroom" or "someone will remember to take out the trash." Unfortunately, implicit arrangements are a breeding ground for resentment. One person inevitably ends up carrying the "mental load" of the household, leading to burnout and passive-aggressive arguments. By upgrading your household to an <em className="text-slate-300">explicit</em> framework, you replace assumptions with absolute clarity. You treat your household like a successful organization where every team member knows their exact role.
            </p>

            <hr className="border-slate-800/50 my-6" />

            <h3 className="text-lg font-bold text-slate-200 mb-3">Why You Need a Formal Chore Contract Template</h3>
            <p>
              Many people wonder: "Is it really necessary to have a written document just to get the kitchen cleaned?" The answer is a resounding yes. A written <strong className="text-slate-300">chore contract template</strong> serves as a neutral, third-party authority in your house. Here is the real-world value it brings to your daily life:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li><strong className="text-slate-300">Defines "Done":</strong> Arguments rarely happen because someone refused to work; they happen because people have different standards of cleanliness. A formal template allows you to define exactly what a completed task looks like (e.g., "Kitchen cleaned means dishes in the dishwasher, counters wiped, and trash taken out").</li>
              <li><strong className="text-slate-300">Removes the Emotion:</strong> When a task is neglected, you don't need to nag, scold, or lecture. You simply point to the signed paper on the refrigerator. The document carries the authority, not your voice.</li>
              <li><strong className="text-slate-300">Creates True Equity:</strong> It visualizes the total workload of the house, ensuring that no single person is unfairly burdened with all the heavy lifting.</li>
            </ol>

            <hr className="border-slate-800/50 my-6" />

            <h3 className="text-lg font-bold text-slate-200 mb-3">Designing a Modern Domestic Arrangements PDF Workflow</h3>
            <p>
              When you are ready to <strong className="text-slate-300">download a free chore contract</strong> or structure your family agreements, a successful document should always cover the following three core pillars of domestic governance:
            </p>

            <h4 className="text-base font-semibold text-slate-300 mt-4 mb-2">1. Task Delegation (The Checklist)</h4>
            <p>
              This is the heart of the agreement. Tasks should be assigned based on age, ability, and personal preference. Mixing fixed daily tasks (like making beds) with rotating weekly tasks (like mowing the lawn) keeps the routine from feeling monotonous.
            </p>

            <h4 className="text-base font-semibold text-slate-300 mt-4 mb-2">2. Accountability and Deadlines</h4>
            <p>
              A task without a deadline will always be delayed. Your agreement should specify <em className="text-slate-300">when</em> a task must be completed (e.g., "Dishes must be cleared before screen time unlocks" or "Trash must be at the curb by Sunday evening").
            </p>

            <h4 className="text-base font-semibold text-slate-300 mt-4 mb-2">3. The Reward System (The Household Economy)</h4>
            <p>
              For younger children, tying your <strong className="text-slate-300">family chore checklist</strong> to tangible rewards is essential for building long-term motivation. The most effective rewards in modern North American households include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-slate-300">Allowance:</strong> Teaching financial literacy by treating chores like a real-world job.</li>
              <li><strong className="text-slate-300">Screen Time:</strong> Using WiFi access and tablet privileges as incentives (e.g., chores must be completed before video games are allowed).</li>
              <li><strong className="text-slate-300">Family Perks:</strong> Unlocking a special weekend movie night or a fun outing as a reward for a 100% completed week.</li>
            </ul>

            <hr className="border-slate-800/50 my-6" />

            <h3 className="text-lg font-bold text-slate-200 mb-3">Access Your Free Domestic Arrangements PDF Free Download Instantly</h3>
            <p>
              You don't need to hire a lawyer or spend hours trying to design a complicated document from scratch. We believe that a well-organized, peaceful home should be free and accessible to every family.
            </p>
            <p>
              Our advanced, web-based tool allows you to generate a fully customized, professional-grade <strong className="text-slate-300">chore contract template</strong> tailored specifically to your family's size, age groups, and specific rules in less than 60 seconds.
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-slate-300">No Sign-Up Required:</strong> Your privacy is our top priority. We do not collect, store, or sell any personal data. You will never be forced to leave your email address just to get your file.</li>
              <li><strong className="text-slate-300">Instant Direct Download:</strong> Customize your clauses, click one button, and generate your print-ready PDF instantly.</li>
              <li><strong className="text-slate-300">Perfect for the Fridge:</strong> Print it out, hold a quick family meeting, have everyone sign their name, and stick it on the refrigerator to establish a visual anchor for your new household routine.</li>
            </ul>
            <p className="mt-4 text-slate-300 font-medium">
              Take the first step toward a more cooperative, stress-free household tonight. Stop nagging, start documenting, and watch your family transform into a true team.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}