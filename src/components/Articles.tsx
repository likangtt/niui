import { BookOpen, Scale, Users, Home, Baby, Heart, PawPrint, MessageCircle, GraduationCap, Fence, Handshake, Key, Receipt, Car } from 'lucide-react';

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
      'A comprehensive neighbor boundary agreement addresses at minimum four friction points that generate 80% of neighbor-to-neighbor legal complaints. First, noise and quiet hours — specifying decibel limits for music, power tools, and outdoor gatherings, with differentiated hours for weekdays, weekends, and holidays. Second, property line maintenance — clarifying who trims the overhanging branches, who pays for the shared fence repair after a storm, and who is responsible for leaves that fall from one property onto the other. Third, parking and driveway access — designating where each household parks, how long guests may occupy street parking in front of the neighbor\'s house, and whether the shared driveway can be blocked for short-term loading. Fourth, waste and appearance standards — agreeing on garbage bin placement, lawn maintenance frequency, and holiday decoration timelines. The case of the Austin couple demonstrates the fundamental truth of neighbor relations: the cost of documenting expectations is measured in minutes and paper; the cost of undocumented expectations is measured in legal fees, court dates, and permanently broken relationships. For anyone living within 50 feet of another human being, a signed neighbor property boundary agreement is not paranoia — it is the cheapest form of conflict insurance available.',
    ],
  },
  {
    icon: <Handshake size={20} />,
    tag: 'Borrowing & Lending',
    title: 'The $4,200 Lawnmower: Why Every Item You Lend to a Neighbor or Friend Needs a Written Agreement',
    paragraphs: [
      'In the summer of 2023, Mark Chen of Portland, Oregon lent his brand-new professional-grade lawnmower — purchased for $4,200 — to his neighbor of seven years for what was described as "a couple of hours, just need to catch up on the backyard." The neighbor returned it three days later with a bent blade, a cracked wheel housing from running over a hidden rock, and grass clippings clogging the engine intake. When Mark asked for repair costs, the neighbor responded with visible offense: "It was already like that" and "I thought we were friends." The friendship did not survive the dispute. Mark\'s lawnmower sat unrepaired for four months while he debated small claims court. This scenario — a lender believing the terms were obvious, a borrower believing friendship overrides liability — plays out thousands of times daily across American neighborhoods, and almost every case could have been prevented by a one-page lending agreement signed before the handoff.',
      'A properly structured item lending agreement protects both parties in ways that verbal arrangements fundamentally cannot. For the lender, it documents the item\'s pre-loan condition — ideally with timestamped photos — establishes a clear return date, specifies authorized uses and prohibited uses, and assigns financial responsibility for damage, loss, or theft during the loan period. For the borrower, it provides clarity about exactly what is expected, eliminates the ambiguity that makes the "when do you need it back?" question awkward, and protects against scope creep where a lender retroactively claims additional items were included or additional damage occurred. The agreement should specify the item description with serial numbers where applicable, approximate replacement value, loan start and end dates, condition at handover, authorized users (is the borrower\'s teenage son allowed to use it?), and a clear process for handling damage — typically full repair or replacement cost reimbursement within 30 days. The most powerful sentence in any lending agreement is not about money; it is about preserving relationships. When both parties sign a personal property loan contract, the document becomes the enforcer, not the friend. And unlike a friendship damaged by an unresolved dispute, a signed piece of paper can be replaced in 60 seconds at no emotional cost.',
    ],
  },
  {
    icon: <Key size={20} />,
    tag: 'House Sitting & Security',
    title: 'House Sitting Agreement Horror Stories: The Family That Came Home to a Destroyed Living Room and No Legal Recourse',
    paragraphs: [
      'In December 2024, the Morrison family of Denver returned from a two-week holiday trip to Hawaii to find their living room in shambles — wine stains on the white sofa, a broken television screen, cigarette burns on the hardwood floor, and an unlocked back door that had been left open for an unknown number of days. Their house sitter, a trusted coworker\'s 22-year-old daughter who had been paid $300 upfront, had hosted a New Year\'s Eve party attended by approximately 40 guests. The damage totaled over $6,000. When the Morrisons attempted to seek compensation, they discovered the devastating legal reality: without a written house sitting agreement that specified guest policies, property access limits, and liability for damage, they had no enforceable claim beyond small claims court — and even that required proving that the specific sitter, rather than one of 40 party guests, caused each individual item of damage. The Morrisons ultimately ate the entire cost and spent six months rebuilding trust in their own judgment.',
      'A house sitting and key agreement is not an insult to the person you trust with your home — it is protection for both parties against the assumption gaps that cause catastrophic outcomes. The agreement should clearly define: authorized access hours and whether the sitter stays overnight or performs drop-in visits; key security protocols including a prohibition on key duplication and a requirement to report lost keys within two hours; specific daily tasks such as plant watering schedules, pet feeding times and quantities, mail and package collection, and garbage bin management; guest and visitor prohibitions — explicitly stating that parties, gatherings, and overnight guests not listed in the agreement are not permitted; emergency procedures including the homeowner\'s contact information, preferred emergency contractors for plumbing or electrical failures, and the veterinarian\'s contact information if pets are involved; and liability terms specifying that the sitter is financially responsible for damage caused by negligence, unauthorized guests, or failure to secure the property. The Morrison family\'s $6,000 lesson is expensive but instructive: the person you trust most is the person with whom you should be most comfortable signing a written agreement, because clarity is an act of respect, not suspicion. A signed temporary property oversight contract protects the sitter from false accusations just as thoroughly as it protects the homeowner from unauthorized parties.',
    ],
  },
  {
    icon: <Receipt size={20} />,
    tag: 'Shared Property Costs',
    title: 'Who Pays for the Fence? The $12,000 Shared Expense Dispute That Two Neighbors Could Have Settled With a One-Page Contract',
    paragraphs: [
      'In March 2025, two adjacent homeowners in Charlotte, North Carolina faced a shared crisis: a severe thunderstorm had toppled 40 feet of the wooden privacy fence that separated their properties. Both families had dogs that required a secure yard. Both families agreed the fence needed immediate replacement. What they could not agree on was who should pay. Neighbor A argued that because the fence posts were anchored on Neighbor A\'s property, Neighbor B had no financial obligation. Neighbor B argued that because the fence served both properties equally — containing both dogs, providing privacy for both backyards — the cost should be split equally. The disagreement escalated over six weeks of text messages, two unsuccessful mediation attempts, and finally a demand letter from Neighbor A\'s attorney. The new fence cost $12,000 to replace. The combined legal fees for both parties exceeded $9,000. The dogs remained confined to half-yards on leashes for four months while the dispute played out. Total avoidable cost: over $21,000, plus two neighbor relationships permanently and publicly destroyed.',
      'A joint property maintenance cost-sharing agreement resolves this entire category of dispute before the first nail is driven. The agreement template should establish: the precise scope of the shared project with contractor quotes attached as an appendix; the cost distribution formula — whether 50/50, proportional to property benefit, or allocated differently for materials versus labor; a payment timeline with specific dates, typically with each party contributing their share into a designated project account no fewer than seven days before the contractor\'s scheduled start date; the contractor selection process requiring mutual written approval from both parties before any work is authorized; a mechanism for handling cost overruns — typically a cap of 10% above the quoted price beyond which both parties must re-approve in writing; and a default provision specifying that if one party fails to pay their agreed share, the other party may proceed with the project and seek reimbursement through documented channels. The Charlotte fence disaster is a textbook example of what behavioral economists call the "optimism bias" — the irrational belief shared by both neighbors that the other party would eventually see reason and agree to their preferred arrangement. A signed shared property expense agreement does not determine who is right; it establishes who agreed to what before the storm hit, which is the only question a court or mediator actually cares about.',
    ],
  },
  {
    icon: <Car size={20} />,
    tag: 'Transportation & Commuting',
    title: 'Car Pool Contracts: How Three Coworkers Saved $4,800 Each Annually — and Avoided the Scheduling Chaos That Kills Most Ride Shares',
    paragraphs: [
      'In January 2024, three software engineers at a Raleigh-based tech company — all living within a four-mile radius of each other and commuting 22 miles each way to the office — decided to start a car pool arrangement to save money during a period of high gas prices. The first month was euphoric: shared playlists, saved parking spots, and a collective $600 reduction in monthly transportation costs. By month three, the arrangement had collapsed. One driver was consistently 15 minutes late to the pickup point. Another refused to contribute to oil changes and tire rotations, arguing that those were "ownership costs, not driving costs." A third unilaterally changed the Friday route to accommodate a new gym membership without informing the group. The arrangement dissolved into a tense Slack channel and three separate solo commutes — burning more gas, generating more emissions, and creating more workplace friction than if they had never tried at all. Six months later, a new hire who had previously worked at a company with formal vanpool agreements suggested they try again — this time with a written car pool contract.',
      'The second attempt, governed by a signed ride-sharing agreement, has now operated smoothly for over 18 months and saved each participant approximately $4,800 per year in fuel, tolls, maintenance, and parking costs. The contract that made the difference addressed six critical elements that verbal arrangements inevitably neglect. First, the rotation schedule — a fixed weekly driver rotation with designated primary and backup drivers, published 30 days in advance via shared calendar. Second, pickup logistics — specified pickup points, a five-minute grace window, and a rule that any delay exceeding ten minutes without notification means the group departs without the late party, who is responsible for their own transportation that day. Third, cost sharing — a documented monthly settlement process covering fuel (calculated per mile driven), tolls (actual cost divided equally), and routine maintenance costs prorated by miles driven. Fourth, vehicle standards — a minimum cleanliness requirement for each driver\'s car on their driving day, including no excessive trash, no strong odors, and functional seatbelts for all passengers. Fifth, communication protocols — a group notification standard requiring 60 minutes\' advance notice for any schedule change and 24 hours\' notice for planned absences. Sixth, insurance and liability — explicit acknowledgment that each participant relies on their own personal auto insurance as primary coverage, and that the arrangement is a voluntary cost-sharing agreement between private individuals, not a commercial transportation service. The Raleigh engineers\' experience demonstrates a universal truth about shared transportation: the difference between a car pool that saves thousands of dollars and one that costs three friendships is a written, signed, mutually endorsed agreement that removes logistics from the realm of personal negotiation and places them in the realm of pre-agreed protocol.',
    ],
  },
];

export default function Articles() {
  return (
    <section className="no-print max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">
          <BookOpen size={14} />
          Knowledge Base
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
          Roommate &amp; Household Agreement Guide
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          Expert guidance on co-living contracts, kids chore education, couples household division, pet agreements, and conflict resolution strategies that actually work.
        </p>
      </div>

      {/* Articles grid */}
      <div className="grid md:grid-cols-1 gap-8">
        {ARTICLES.map((article, i) => (
          <article
            key={i}
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600/60 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/20 flex items-center justify-center text-sky-400">
                {article.icon}
              </div>
              <span className="text-xs font-semibold tracking-widest text-sky-400/80 uppercase">
                {article.tag}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-5 leading-snug">
              {article.title}
            </h3>

            <div className="flex flex-col gap-4">
              {article.paragraphs.map((para, j) => (
                <p key={j} className="text-sm text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}