/* ============ TRANSLATIONS ============ */
const T = {
  en: {
    'nav-how':'How it works','nav-why':'Why Mwasalaty','nav-shared':'Shared rides','nav-about':'About',
    't-brand':'Mwasalaty','t-brand-m':'Mwasalaty','f-brand':'Mwasalaty',
    'm-nav-how':'How it works','m-nav-why':'Why Mwasalaty','m-nav-shared':'Shared rides','m-nav-about':'About',
    'nav-cta-btn':'Try Mwasalaty','m-nav-cta-btn':'Try Mwasalaty','sticky-cta-btn':'Try Mwasalaty',
    'hero-eyebrow':'Transportation, simplified',
    'hero-title':'Your best way<br>to get there.',
    'hero-lead':'Compare transportation options by time, cost, and pickup point — and choose the ride that works best for you.',
    'hero-cta-primary':'Try Mwasalaty','hero-cta-secondary':'See how it works',
    'hm-1':'Transport modes compared','hm-2':'Commuters in Greater Cairo','hm-3':'Simple search to compare',
    'hero-trust-note':'No signup required to try the live demo below.',
    'rail-1':'Start','rail-2':'How it works','rail-3':'Why Mwasalaty','rail-4':'Shared rides','rail-5':'Our process','rail-6':'Join pilot',
    'marquee-track':'Metro · Bus · Microbus · Shared Ride · Compare · Choose · Go · Metro · Bus · Microbus · Shared Ride · Compare · Choose · Go ·',
    'chip-1-txt':'Metro arriving in 4 min','chip-2-txt':'Pickup confirmed',
    'phone-app-name':'Mwasalaty','phone-from-lbl':'CURRENT LOCATION','phone-from-val':'Nasr City',
    'phone-to-lbl':'DESTINATION','phone-to-val':'Downtown Cairo',
    'phone-opt1-name':'Metro','phone-opt1-sub':'32 min · Fastest','phone-opt2-name':'Shared Ride','phone-opt2-sub':'35 min · Convenient',
    'phone-cta':'Choose this ride',
    'prob-eyebrow':'The problem','prob-title':'Every commute comes with too many unknowns.',
    'prob-sub':"Transportation information exists — it's just scattered across too many places to compare easily before you leave.",
    'pc-1':'Uncertain waiting times','pc-2':'Traffic delays','pc-3':'Confusing options','pc-4':'Different prices, same trip','pc-5':'Crowded, uncomfortable rides',
    'sol-eyebrow':'The solution','sol-title':'One place. Every option.',
    'sol-sub':'Mwasalaty brings buses, microbuses, metro, and shared rides together so you can compare your options before you leave.',
    'fl-1':'Location','fl-2':'Destination','fl-3':'Compare','fl-4':'Choose','fl-5':'Go',
    'how-eyebrow':'How it works','how-title':'From search to seat, in a few taps.',
    'hw-1-t':'Enter your location','hw-1-d':"Tell Mwasalaty where you're starting from.",
    'hw-2-t':'Enter your destination','hw-2-d':'Add where you need to be.',
    'hw-3-t':'Compare transportation','hw-3-d':'See microbus, bus, metro, and shared ride side by side.',
    'hw-4-t':'Choose the best option','hw-4-d':'Pick based on what matters most to you — time, cost, or comfort.',
    'hw-5-t':'Meet at the pickup point','hw-5-d':'Head to the suggested spot and go.',
    'hw-note':'Example UI cards — illustrative values',
    'oc-1-badge':'Fastest','oc-2-badge':'Lowest cost','oc-4-badge':'Most convenient',
    'oc-1-name':'Metro','oc-2-name':'Bus','oc-3-name':'Microbus','oc-4-name':'Shared ride',
    'oc-time-lbl':'Time','oc-cost-lbl':'Cost','oc-pickup-lbl':'Pickup',
    'oc-time-lbl2':'Time','oc-cost-lbl2':'Cost','oc-pickup-lbl2':'Pickup',
    'oc-time-lbl3':'Time','oc-cost-lbl3':'Cost','oc-pickup-lbl3':'Pickup',
    'oc-time-lbl4':'Time','oc-cost-lbl4':'Cost','oc-pickup-lbl4':'Pickup',
    'oc-1-pickup':'Nearest station','oc-2-pickup':'Main bus stop','oc-3-pickup':'Designated point','oc-4-pickup':'Common point',
    'demo-eyebrow':'Try it yourself','demo-title':'See Mwasalaty in action.',
    'demo-sub':'Enter a route below to preview how comparing transportation options feels.',
    'df-from-lbl':'Current location','df-to-lbl':'Destination','demoSubmit':'Find my best route',
    'demo-empty-txt':'Enter a route above and search to see your options.',
    'demo-disclaimer':'This is a prototype demonstration using example data — not live transportation data.',
    'why-eyebrow':'Why Mwasalaty','why-title':'Built around what actually matters on a commute.',
    'bf-1-t':'Save time','bf-1-d':'Spend less time waiting and searching.',
    'bf-2-t':'Save money','bf-2-d':'Compare transportation costs before choosing.',
    'bf-3-t':'Compare options','bf-3-d':'See different transportation modes in one place.',
    'bf-4-t':'Reduce uncertainty','bf-4-d':'Know what to expect before you leave.',
    'bf-5-t':'Share smarter','bf-5-d':'Connect with people traveling in the same direction.',
    'sh-eyebrow':'Shared rides','sh-title':'Going the same way? Go together.',
    'sh-sub':'Find people traveling in the same direction and make shared transportation more efficient through organized pickup points.',
    'sh-note':'A concept in prototype — safety features shown here are illustrative, not yet implemented.',
    'sh-a':'A','sh-b':'B','sh-pickup':'Common pickup point','sh-dest':'Shared destination',
    'ps-eyebrow':'Product preview','ps-title':'A real MVP, screen by screen.',
    'ps-1':'Home / Search','ps-2':'Enter destination','ps-3':'Compare options','ps-4':'Selected route','ps-5':'Pickup point',
    'mp-1-from-lbl':'CURRENT LOCATION','mp-1-from-val':'Nasr City','mp-1-to-lbl':'DESTINATION','mp-1-to-val':'Downtown Cairo','mp-1-btn':'Find my best route',
    'mp-2-title':'Destination','mp-2-from-lbl':'CURRENT LOCATION','mp-2-to-lbl':'DESTINATION','mp-2-typing':'Down...',
    'mp-2-s1':'Downtown Cairo','mp-2-s2':'Tahrir Square','mp-2-s3':'Ramses Station','mp-2-btn':'Continue',
    'mp-3-title':'Compare','mp-3-tab1':'Time','mp-3-tab2':'Cost','mp-3-tab3':'Convenience',
    'mp-3-r1-name':'Metro','mp-3-r1-sub':'32 min','mp-3-r2-name':'Bus','mp-3-r2-sub':'45 min',
    'mp-3-r3-name':'Microbus','mp-3-r3-sub':'35 min','mp-3-r4-name':'Shared Ride','mp-3-r4-sub':'35 min',
    'mp-4-title':'Selected route','mp-4-badge':'Fastest','mp-4-name':'Metro','mp-4-meta':'32 min · Nearest station','mp-4-pickup':'Nearest metro station','mp-4-btn':'Choose this ride',
    'mp-5-title':'Pickup point','mp-5-place':'Nasr City Metro Station','mp-5-sub':'Platform 2 · Eastbound','mp-5-tag':'Meeting point set',
    'wf-eyebrow':"Who it's for",'wf-title':'Built for the daily commute.',
    'wf-1-t':'Students','wf-1-d':'Affordable and predictable daily transportation.',
    'wf-2-t':'Employees','wf-2-d':'Reliable transportation without paying ride-hailing prices every day.',
    'val-eyebrow':'Our process','val-title':'We started with people, not technology.',
    'val-sub':'Mwasalaty is shaped by real transportation research using a design-thinking process — not assumptions.',
    'v-1':'Field research','v-2':'Empathy map','v-3':'Pain & gain','v-4':'Five whys','v-5':'Point of view','v-6':'How might we','v-7':'Brainstorming','v-8':'Prototype',
    'val-quote-txt':'The team researched real transportation experiences in Greater Cairo and used those insights to shape how Mwasalaty compares and organizes options.',
    'mk-eyebrow':'Market opportunity','mk-title':"Greater Cairo's transportation gap is only getting bigger.",
    'mk-1':'Greater Cairo residents','mk-2':'Projected population by 2027','mk-3':'Ride-hailing / shared mobility market, 2025','mk-4':'Projected market size by 2031',
    'mk-src':'Figures are third-party market research estimates for Greater Cairo transportation and mobility, not Mwasalaty revenue or user numbers.',
    'cta-eyebrow':'Join the pilot','cta-title':'Be one of the first to test Mwasalaty.',
    'cta-sub':"We're building a smarter way to plan daily transportation. Join our early users and help us shape the experience.",
    'pf-name-lbl':'Name','pf-email-lbl':'Email','pf-role-lbl':'I am a',
    'pf-name-err':'Please enter your name.','pf-email-err':'Please enter a valid email.',
    'role-1':'Student','role-2':'Employee','role-3':'Daily Commuter','pilotSubmit':'Join Mwasalaty',
    'pilot-trust-note':'Takes under a minute. Used only to reach out about the pilot — nothing else.',
    'ps-success-t':"You're on the list.",'ps-success-d':'We\'ll reach out as Mwasalaty moves from prototype to pilot testing.',
    'f-home':'Home','f-how':'How it works','f-why':'Why Mwasalaty','f-about':'About','f-contact':'Contact',
    'f-copy':'© 2026 Mwasalaty. InnovEgypt Aspire Youth — prototype project.','f-tag':'مواصلاتي — Egyptian transportation, redesigned.'
  },
  ar: {
    'nav-how':'كيف تعمل','nav-why':'ليه مواصلاتي','nav-shared':'رحلات مشتركة','nav-about':'عن المشروع',
    't-brand':'مواصلاتي','t-brand-m':'مواصلاتي','f-brand':'مواصلاتي',
    'm-nav-how':'كيف تعمل','m-nav-why':'ليه مواصلاتي','m-nav-shared':'رحلات مشتركة','m-nav-about':'عن المشروع',
    'nav-cta-btn':'جرّب مواصلاتي','m-nav-cta-btn':'جرّب مواصلاتي','sticky-cta-btn':'جرّب مواصلاتي',
    'hero-eyebrow':'المواصلات، بسّطناها',
    'hero-title':'أفضل طريقة<br>توصّلك.',
    'hero-lead':'قارن بين وسائل المواصلات من حيث الوقت والتكلفة ونقطة الالتقاء — واختار اللي يناسبك.',
    'hero-cta-primary':'جرّب مواصلاتي','hero-cta-secondary':'شوف إزاي تعمل',
    'hm-1':'وسائل مواصلات بنقارن بينها','hm-2':'راكب في القاهرة الكبرى','hm-3':'بحث واحد بس عشان تقارن',
    'hero-trust-note':'من غير ما تعمل حساب، جرّب العرض التفاعلي تحت.',
    'rail-1':'البداية','rail-2':'إزاي تعمل','rail-3':'ليه مواصلاتي','rail-4':'رحلات مشتركة','rail-5':'رحلتنا في البحث','rail-6':'انضم للتجربة',
    'marquee-track':'مترو · أتوبيس · ميكروباص · رحلة مشتركة · قارن · اختار · اتحرك · مترو · أتوبيس · ميكروباص · رحلة مشتركة · قارن · اختار · اتحرك ·',
    'chip-1-txt':'المترو هيوصل خلال 4 دقايق','chip-2-txt':'تم تأكيد نقطة الالتقاء',
    'phone-app-name':'مواصلاتي','phone-from-lbl':'موقعك الحالي','phone-from-val':'مدينة نصر',
    'phone-to-lbl':'الوجهة','phone-to-val':'وسط البلد',
    'phone-opt1-name':'مترو','phone-opt1-sub':'32 دقيقة · الأسرع','phone-opt2-name':'رحلة مشتركة','phone-opt2-sub':'35 دقيقة · مريحة',
    'phone-cta':'اختار الرحلة دي',
    'prob-eyebrow':'المشكلة','prob-title':'كل رحلة يومية فيها حاجات كتير مش متوقعة.',
    'prob-sub':'معلومات المواصلات موجودة — بس متفرقة في أماكن كتير صعب تقارن بينها قبل ما تتحرك.',
    'pc-1':'وقت انتظار مش متوقع','pc-2':'زحمة المرور','pc-3':'خيارات محيّرة','pc-4':'أسعار مختلفة لنفس الرحلة','pc-5':'زحمة وعدم راحة',
    'sol-eyebrow':'الحل','sol-title':'مكان واحد. كل الخيارات.',
    'sol-sub':'مواصلاتي بتجمع الأتوبيس والميكروباص والمترو والرحلات المشتركة في مكان واحد عشان تقارن قبل ما تتحرك.',
    'fl-1':'الموقع','fl-2':'الوجهة','fl-3':'قارن','fl-4':'اختار','fl-5':'اتحرك',
    'how-eyebrow':'إزاي تعمل','how-title':'من البحث للركوب، في خطوات بسيطة.',
    'hw-1-t':'دخّل موقعك','hw-1-d':'قول لمواصلاتي هتتحرك منين.',
    'hw-2-t':'دخّل وجهتك','hw-2-d':'ضيف المكان اللي رايح له.',
    'hw-3-t':'قارن وسائل المواصلات','hw-3-d':'شوف الميكروباص والأتوبيس والمترو والرحلة المشتركة جنب بعض.',
    'hw-4-t':'اختار أفضل خيار','hw-4-d':'اختار حسب اللي يهمك — الوقت أو السعر أو الراحة.',
    'hw-5-t':'قابل عند نقطة الالتقاء','hw-5-d':'روح للمكان المقترح وامشي.',
    'hw-note':'كروت توضيحية — أرقام تقريبية',
    'oc-1-badge':'الأسرع','oc-2-badge':'الأرخص','oc-4-badge':'الأكثر راحة',
    'oc-1-name':'مترو','oc-2-name':'أتوبيس','oc-3-name':'ميكروباص','oc-4-name':'رحلة مشتركة',
    'oc-time-lbl':'الوقت','oc-cost-lbl':'التكلفة','oc-pickup-lbl':'الالتقاء',
    'oc-time-lbl2':'الوقت','oc-cost-lbl2':'التكلفة','oc-pickup-lbl2':'الالتقاء',
    'oc-time-lbl3':'الوقت','oc-cost-lbl3':'التكلفة','oc-pickup-lbl3':'الالتقاء',
    'oc-time-lbl4':'الوقت','oc-cost-lbl4':'التكلفة','oc-pickup-lbl4':'الالتقاء',
    'oc-1-pickup':'أقرب محطة','oc-2-pickup':'موقف الأتوبيس الرئيسي','oc-3-pickup':'نقطة محددة','oc-4-pickup':'نقطة مشتركة',
    'demo-eyebrow':'جرّب بنفسك','demo-title':'شوف مواصلاتي شغالة.',
    'demo-sub':'دخّل رحلة تحت عشان تشوف إزاي مقارنة وسائل المواصلات بتحصل.',
    'df-from-lbl':'موقعك الحالي','df-to-lbl':'الوجهة','demoSubmit':'دوّرلي على أفضل رحلة',
    'demo-empty-txt':'دخّل رحلة فوق واضغط بحث عشان تشوف خياراتك.',
    'demo-disclaimer':'ده عرض تجريبي ببيانات افتراضية — مش بيانات مواصلات حقيقية أو لحظية.',
    'why-eyebrow':'ليه مواصلاتي','why-title':'مبني حوالين اللي فعلاً بيهمك في رحلتك.',
    'bf-1-t':'وفّر وقتك','bf-1-d':'وقت أقل في الانتظار والبحث.',
    'bf-2-t':'وفّر فلوسك','bf-2-d':'قارن تكلفة المواصلات قبل ما تختار.',
    'bf-3-t':'قارن الخيارات','bf-3-d':'شوف وسائل مواصلات مختلفة في مكان واحد.',
    'bf-4-t':'قلّل اللايقين','bf-4-d':'اعرف تتوقع إيه قبل ما تتحرك.',
    'bf-5-t':'شارك بذكاء','bf-5-d':'اتواصل مع ناس رايحة في نفس الاتجاه.',
    'sh-eyebrow':'رحلات مشتركة','sh-title':'رايحين في نفس الاتجاه؟ روحوا مع بعض.',
    'sh-sub':'دوّر على ناس رايحة في نفس اتجاهك، ونظّم رحلة مشتركة عن طريق نقطة التقاء واحدة.',
    'sh-note':'الفكرة لسه في مرحلة النموذج الأولي — مميزات الأمان هنا توضيحية ولسه متنفذتش.',
    'sh-a':'أ','sh-b':'ب','sh-pickup':'نقطة التقاء مشتركة','sh-dest':'وجهة مشتركة',
    'ps-eyebrow':'معاينة المنتج','ps-title':'نموذج أولي حقيقي، شاشة بشاشة.',
    'ps-1':'الرئيسية / بحث','ps-2':'إدخال الوجهة','ps-3':'مقارنة الخيارات','ps-4':'الرحلة المختارة','ps-5':'نقطة الالتقاء',
    'mp-1-from-lbl':'موقعك الحالي','mp-1-from-val':'مدينة نصر','mp-1-to-lbl':'الوجهة','mp-1-to-val':'وسط البلد','mp-1-btn':'دوّرلي على أفضل رحلة',
    'mp-2-title':'الوجهة','mp-2-from-lbl':'موقعك الحالي','mp-2-to-lbl':'الوجهة','mp-2-typing':'وسط...',
    'mp-2-s1':'وسط البلد','mp-2-s2':'ميدان التحرير','mp-2-s3':'محطة رمسيس','mp-2-btn':'استمرار',
    'mp-3-title':'مقارنة','mp-3-tab1':'الوقت','mp-3-tab2':'السعر','mp-3-tab3':'الراحة',
    'mp-3-r1-name':'مترو','mp-3-r1-sub':'32 دقيقة','mp-3-r2-name':'أتوبيس','mp-3-r2-sub':'45 دقيقة',
    'mp-3-r3-name':'ميكروباص','mp-3-r3-sub':'35 دقيقة','mp-3-r4-name':'رحلة مشتركة','mp-3-r4-sub':'35 دقيقة',
    'mp-4-title':'الرحلة المختارة','mp-4-badge':'الأسرع','mp-4-name':'مترو','mp-4-meta':'32 دقيقة · أقرب محطة','mp-4-pickup':'أقرب محطة مترو','mp-4-btn':'اختار الرحلة دي',
    'mp-5-title':'نقطة الالتقاء','mp-5-place':'محطة مترو مدينة نصر','mp-5-sub':'رصيف 2 · اتجاه الشرق','mp-5-tag':'تم تحديد نقطة اللقاء',
    'wf-eyebrow':'لمين مواصلاتي','wf-title':'مصمم للرحلة اليومية.',
    'wf-1-t':'الطلاب','wf-1-d':'مواصلات يومية بسعر مناسب وموعد متوقع.',
    'wf-2-t':'الموظفين','wf-2-d':'مواصلات موثوقة من غير ما تدفع سعر تطبيقات النقل كل يوم.',
    'val-eyebrow':'رحلتنا في البحث','val-title':'بدأنا بالناس، مش بالتكنولوجيا.',
    'val-sub':'مواصلاتي اتبنت على بحث حقيقي في المواصلات باستخدام منهجية Design Thinking — مش افتراضات.',
    'v-1':'بحث ميداني','v-2':'خريطة التعاطف','v-3':'الألم والمكسب','v-4':'الأسئلة الخمسة','v-5':'وجهة النظر','v-6':'كيف يمكن أن','v-7':'العصف الذهني','v-8':'النموذج الأولي',
    'val-quote-txt':'الفريق درس تجارب مواصلات حقيقية في القاهرة الكبرى واستخدم النتائج دي في تصميم إزاي مواصلاتي بتقارن وتنظّم الخيارات.',
    'mk-eyebrow':'فرصة السوق','mk-title':'فجوة المواصلات في القاهرة الكبرى بتكبر أكتر.',
    'mk-1':'نسمة في القاهرة الكبرى','mk-2':'العدد المتوقع بحلول 2027','mk-3':'حجم سوق النقل المشترك سنة 2025','mk-4':'الحجم المتوقع بحلول 2031',
    'mk-src':'الأرقام تقديرات بحثية من جهات خارجية عن مواصلات القاهرة الكبرى، مش إيرادات أو أعداد مستخدمين خاصة بمواصلاتي.',
    'cta-eyebrow':'انضم للتجربة الأولى','cta-title':'كن من أول اللي يجربوا مواصلاتي.',
    'cta-sub':'بنبني طريقة أذكى لتنظيم مواصلاتك اليومية. انضم لمستخدمينا الأوائل وساعدنا نطوّر التجربة.',
    'pf-name-lbl':'الاسم','pf-email-lbl':'البريد الإلكتروني','pf-role-lbl':'أنا',
    'pf-name-err':'من فضلك اكتب اسمك.','pf-email-err':'من فضلك اكتب بريد إلكتروني صحيح.',
    'role-1':'طالب','role-2':'موظف','role-3':'راكب يومي','pilotSubmit':'انضم لمواصلاتي',
    'pilot-trust-note':'بياخد أقل من دقيقة. هنستخدم بياناتك بس عشان نتواصل معاك بخصوص التجربة — مفيش غير كده.',
    'ps-success-t':'اتسجلت معانا.','ps-success-d':'هنتواصل معاك أول ما مواصلاتي تدخل مرحلة التجربة الفعلية.',
    'f-home':'الرئيسية','f-how':'كيف تعمل','f-why':'ليه مواصلاتي','f-about':'عن المشروع','f-contact':'تواصل',
    'f-copy':'© 2026 مواصلاتي. مشروع InnovEgypt Aspire Youth — نموذج أولي.','f-tag':'Mwasalaty — المواصلات المصرية، بشكل جديد.'
  }
};

function applyLang(lang){
  const dict = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-ar', lang === 'ar');
  Object.keys(dict).forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    if(id === 'hero-title'){ el.innerHTML = dict[id]; }
    else { el.textContent = dict[id]; }
  });
  document.querySelectorAll('h2.section-title').forEach(el=>initTitleReveal(el, false));
  document.getElementById('lang-en-btn').classList.toggle('active', lang==='en');
  document.getElementById('lang-ar-btn').classList.toggle('active', lang==='ar');
  document.getElementById('lang-en-btn').setAttribute('aria-pressed', lang==='en');
  document.getElementById('lang-ar-btn').setAttribute('aria-pressed', lang==='ar');
  // demo placeholders re-localize current inputs only if untouched by user default values
  document.title = lang === 'ar' ? 'مواصلاتي | مواصلات أذكى للقاهرة الكبرى' : 'Mwasalaty | Smarter Transportation for Greater Cairo';
  localStorage_lang = lang;
}
let localStorage_lang = 'en';
function switchLang(lang){
  if(typeof REDUCED_MOTION !== 'undefined' && REDUCED_MOTION){ applyLang(lang); return; }
  document.body.style.opacity = '.4';
  setTimeout(()=>{ applyLang(lang); document.body.style.opacity = '1'; }, 160);
}
document.getElementById('lang-en-btn').addEventListener('click', ()=>switchLang('en'));
document.getElementById('lang-ar-btn').addEventListener('click', ()=>switchLang('ar'));

/* ============ MOBILE MENU ============ */
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuOpenBtn.addEventListener('click', ()=>{ mobileMenu.classList.add('open'); });
menuCloseBtn.addEventListener('click', ()=>{ mobileMenu.classList.remove('open'); });
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

/* ============ INTERACTIVE DEMO ============ */
const demoData = {
  en: [
    {name:'Metro', badge:'Fastest', time:'32 min', cost:'EGP 15', pickup:'Nearest metro station', icon:'metro'},
    {name:'Bus', badge:'Lowest cost', time:'45 min', cost:'EGP 10', pickup:'Main bus stop', icon:'bus'},
    {name:'Microbus', badge:'', time:'35 min', cost:'EGP 20', pickup:'Designated pickup point', icon:'micro'},
    {name:'Shared Ride', badge:'Most convenient', time:'35 min', cost:'EGP 18', pickup:'Common pickup point', icon:'share'}
  ],
  ar: [
    {name:'مترو', badge:'الأسرع', time:'32 دقيقة', cost:'15 جنيه', pickup:'أقرب محطة مترو', icon:'metro'},
    {name:'أتوبيس', badge:'الأرخص', time:'45 دقيقة', cost:'10 جنيه', pickup:'موقف الأتوبيس الرئيسي', icon:'bus'},
    {name:'ميكروباص', badge:'', time:'35 دقيقة', cost:'20 جنيه', pickup:'نقطة التقاء محددة', icon:'micro'},
    {name:'رحلة مشتركة', badge:'الأكثر راحة', time:'35 دقيقة', cost:'18 جنيه', pickup:'نقطة التقاء مشتركة', icon:'share'}
  ]
};
const icons = {
  metro:'<path d="M4 15h16M6 15v3m12-3v3M5 15l1.5-6.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 15M7 11h10" stroke-width="1.6" stroke-linecap="round"/>',
  bus:'<path d="M3 17h2l2-6h10l2 6h2M5 17v2m14-2v2M7 11l1.5-4h7L17 11" stroke-width="1.6" stroke-linecap="round"/>',
  micro:'<path d="M4 16h16M6 16v2.5m12-2.5v2.5M5 16l1-7a2 2 0 0 1 2-1.7h8a2 2 0 0 1 2 1.7l1 7" stroke-width="1.6" stroke-linecap="round"/>',
  share:'<path d="M17 20c0-2.8-2.2-5-5-5s-5 2.2-5 5M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke-width="1.6" stroke-linecap="round"/>'
};

const demoResults = document.getElementById('demoResults');
document.getElementById('demoSubmit').addEventListener('click', ()=>{
  const from = document.getElementById('df-from').value.trim() || (localStorage_lang==='ar'?'موقعك':'Your location');
  const to = document.getElementById('df-to').value.trim() || (localStorage_lang==='ar'?'وجهتك':'Your destination');
  const lang = localStorage_lang;
  const loadingTxt = lang==='ar' ? `بنقارن رحلتك من ${from} إلى ${to}...` : `Comparing your options from ${from} to ${to}...`;
  if(typeof REDUCED_MOTION !== 'undefined' && REDUCED_MOTION){
    demoResults.innerHTML = `<div class="loading-row"><div class="spinner"></div><span>${loadingTxt}</span></div>`;
  } else {
    demoResults.innerHTML = `<p style="font-size:13px;color:var(--muted);font-weight:600;margin-block-end:14px;">${loadingTxt}</p><div class="skeleton-cards"><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div></div>`;
  }
  setTimeout(()=>{ renderResults(lang); }, 900);
});

function renderResults(lang){
  const opts = demoData[lang];
  const chooseLbl = lang==='ar' ? 'اختار الرحلة دي' : 'Choose this ride';
  let html = '<div class="result-cards">';
  opts.forEach((o,i)=>{
    html += `<button type="button" class="result-card" data-idx="${i}" style="animation-delay:${i*90}ms">
      ${o.badge ? `<span class="badge2">${o.badge}</span>` : '<span class="badge2" style="visibility:hidden">·</span>'}
      <h4>${o.name}</h4>
      <div class="time">${o.time}</div>
      <div class="price">${o.cost.replace(/[^0-9]/g,'')}<span> ${lang==='ar'?'جنيه':'EGP'}</span></div>
      <div class="pickup"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3"/><path d="M12 21c4-4.5 7-8 7-11a7 7 0 10-14 0c0 3 3 6.5 7 11z"/></svg><span>${o.pickup}</span></div>
    </button>`;
  });
  html += '</div><div id="chooseBar"></div>';
  demoResults.innerHTML = html;
  requestAnimationFrame(()=>{
    demoResults.querySelectorAll('.result-card').forEach(c=>c.classList.add('show'));
  });
  demoResults.querySelectorAll('.result-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      demoResults.querySelectorAll('.result-card').forEach(c=>c.classList.remove('chosen'));
      card.classList.add('chosen');
      const idx = card.dataset.idx;
      const o = opts[idx];
      const bar = document.getElementById('chooseBar');
      bar.innerHTML = `<div class="demo-choose">
        <p>${lang==='ar' ? `${o.name} مختار — الالتقاء عند: ` : `${o.name} selected — meet at: `}<strong>${o.pickup}</strong></p>
        <button class="btn btn-primary" id="confirmChoiceBtn">${chooseLbl}</button>
      </div>`;
      document.getElementById('confirmChoiceBtn').addEventListener('click', ()=>{
        demoResults.innerHTML = `<div class="demo-success">
          <div class="check"><svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h4>${lang==='ar' ? 'تم تأكيد الرحلة (تجريبي)' : 'Route confirmed (demo only)'}</h4>
          <p>${lang==='ar' ? 'ده عرض تجريبي فقط — مفيش رحلة حقيقية اتحجزت.' : "This is a demo only — no real ride has been booked."}</p>
          <button class="btn btn-ghost" id="resetDemoBtn">${lang==='ar' ? 'جرّب تاني' : 'Try again'}</button>
        </div>`;
        document.getElementById('resetDemoBtn').addEventListener('click', ()=>{
          demoResults.innerHTML = `<div class="demo-empty" id="demoEmpty"><svg viewBox="0 0 24 24" fill="none"><path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 0l-6 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><p>${lang==='ar' ? 'دخّل رحلة فوق واضغط بحث عشان تشوف خياراتك.' : 'Enter a route above and search to see your options.'}</p></div>`;
        });
      });
    });
  });
}

/* ============ PILOT FORM ============ */
document.querySelectorAll('.role-chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.role-chip').forEach(c=>{c.classList.remove('active'); c.setAttribute('aria-pressed','false');});
    chip.classList.add('active');
    chip.setAttribute('aria-pressed','true');
  });
});
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById('pilotSubmit').addEventListener('click', ()=>{
  const nameEl = document.getElementById('pf-name');
  const emailEl = document.getElementById('pf-email');
  const nameRow = document.getElementById('pf-name-row');
  const emailRow = document.getElementById('pf-email-row');
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const nameOk = name.length > 0;
  const emailOk = emailPattern.test(email);
  nameRow.classList.toggle('invalid', !nameOk);
  emailRow.classList.toggle('invalid', !emailOk);
  nameEl.setAttribute('aria-invalid', String(!nameOk));
  emailEl.setAttribute('aria-invalid', String(!emailOk));
  if(!nameOk || !emailOk){
    (nameOk ? emailEl : nameEl).focus();
    return;
  }
  document.getElementById('pilotFields').style.display = 'none';
  document.getElementById('pilotSuccess').style.display = 'block';
  document.getElementById('pilotSuccess').setAttribute('tabindex','-1');
  document.getElementById('pilotSuccess').focus();
});

/* ============ ACCESSIBILITY: mark decorative icons ============ */
window.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('svg').forEach(svg=>{
    if(!svg.hasAttribute('role') && !svg.closest('[aria-label]')){
      svg.setAttribute('aria-hidden','true');
      svg.setAttribute('focusable','false');
    }
  });
});

/* ============ ANIMATION: shared setup ============ */
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const POINTER_FINE = window.matchMedia('(pointer: fine)').matches;

/* custom cursor — desktop pointer-fine only */
(function(){
  if(REDUCED_MOTION || !POINTER_FINE) return;
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if(!dot || !ring) return;
  document.body.classList.add('has-custom-cursor');
  let ringX = window.innerWidth/2, ringY = window.innerHeight/2, mouseX = ringX, mouseY = ringY;
  window.addEventListener('mousemove', (e)=>{
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX+'px'; dot.style.top = mouseY+'px';
    dot.style.opacity = '1'; ring.style.opacity = '1';
  });
  document.addEventListener('mouseleave', ()=>{ dot.style.opacity='0'; ring.style.opacity='0'; });
  (function loop(){
    ringX += (mouseX-ringX)*0.18;
    ringY += (mouseY-ringY)*0.18;
    ring.style.left = ringX+'px'; ring.style.top = ringY+'px';
    requestAnimationFrame(loop);
  })();
  const hoverSelector = 'a, button, .result-card, .opt-card, input, .role-chip, .mini-phone, .flow-step, .journey-rail .stop, .market-cell';
  document.addEventListener('mouseover', (e)=>{
    if(e.target.closest(hoverSelector)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', (e)=>{
    if(e.target.closest(hoverSelector)) ring.classList.remove('hover');
  });
})();

/* journey rail — persistent scroll-linked "you are here" route navigator */
(function(){
  const rail = document.getElementById('journeyRail');
  if(!rail) return;
  const fill = document.getElementById('railFill');
  const marker = document.getElementById('railMarker');
  const track = document.getElementById('railTrack');
  const stops = Array.from(rail.querySelectorAll('.stop'));
  const trackHeight = 400;
  const items = stops.map(el => ({ el, target: document.getElementById(el.dataset.target) }))
                      .filter(item => item.target);

  function layout(){
    const doc = document.documentElement;
    const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
    items.forEach(item=>{
      const frac = Math.min(Math.max(item.target.offsetTop / maxScroll, 0), 1);
      item.el.style.top = (frac * trackHeight) + 'px';
      item.el.dataset.frac = frac;
    });
  }
  function update(){
    const doc = document.documentElement;
    const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
    const frac = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    const px = frac * trackHeight;
    fill.style.height = px + 'px';
    marker.style.top = px + 'px';
    let activeIdx = 0;
    items.forEach((item,i)=>{
      if(frac >= parseFloat(item.el.dataset.frac) - 0.02) activeIdx = i;
    });
    stops.forEach((el,i)=> el.classList.toggle('active', items[activeIdx] && el === items[activeIdx].el));
  }
  layout();
  update();
  let raf = false;
  window.addEventListener('scroll', ()=>{
    if(raf) return; raf = true;
    requestAnimationFrame(()=>{ update(); raf = false; });
  });
  window.addEventListener('resize', ()=>{ layout(); update(); });
  stops.forEach(el=>{
    el.addEventListener('click', ()=>{
      const target = document.getElementById(el.dataset.target);
      if(target) target.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block:'start' });
    });
  });
})();

/* header scroll shadow + scroll progress */
(function(){
  const nav = document.querySelector('header.site-nav');
  const progress = document.getElementById('scrollProgress');
  let ticking = false;
  function update(){
    nav.classList.toggle('scrolled', window.scrollY > 8);
    const doc = document.documentElement;
    const pct = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight) * 100;
    if(progress) progress.style.width = Math.min(Math.max(pct,0),100) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  });
  update();
})();

/* generic staggered reveal for card grids */
(function(){
  const groups = document.querySelectorAll('.reveal-group');
  groups.forEach(group=>{
    const items = group.querySelectorAll(':scope > .reveal, :scope > .reveal-scale');
    if(REDUCED_MOTION){
      items.forEach(i=>i.classList.add('in-view'));
      const fill = group.querySelector('.flow-line-fill');
      if(fill) fill.classList.add('in-view');
      return;
    }
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          items.forEach((item,i)=>{
            item.style.transitionDelay = (i*70)+'ms';
            item.classList.add('in-view');
            setTimeout(()=>{ item.style.transitionDelay = ''; }, 760 + i*70);
          });
          const fill = group.querySelector('.flow-line-fill');
          if(fill) setTimeout(()=>fill.classList.add('in-view'), 120);
          const counts = group.querySelectorAll('.count');
          if(counts.length) counts.forEach(c=>animateCount(c));
          obs.unobserve(group);
        }
      });
    }, {threshold:0.18});
    obs.observe(group);
  });
})();

/* validation timeline */
(function(){
  const track = document.querySelector('.val-track');
  if(!track) return;
  if(REDUCED_MOTION){ track.classList.add('in-view'); return; }
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ track.classList.add('in-view'); obs.unobserve(track); }
    });
  }, {threshold:0.2});
  obs.observe(track);
})();

/* number count-up */
function animateCount(el){
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals, 10) || 0;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = target * eased;
    el.textContent = prefix + val.toFixed(decimals) + suffix;
    if(p < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + target.toFixed(decimals) + suffix;
  }
  requestAnimationFrame(tick);
}

/* hero cinematic entrance: route line, pins, chips */
(function(){
  const routeBg = document.querySelector('.route-bg');
  const chip1 = document.querySelector('.chip-1');
  const chip2 = document.querySelector('.chip-2');
  if(REDUCED_MOTION){
    if(routeBg) routeBg.classList.add('draw');
    if(chip1) chip1.classList.add('in-view');
    if(chip2) chip2.classList.add('in-view');
    return;
  }
  setTimeout(()=>{ if(routeBg) routeBg.classList.add('draw'); }, 500);
  setTimeout(()=>{ if(chip1) chip1.classList.add('in-view'); }, 1550);
  setTimeout(()=>{ if(chip2) chip2.classList.add('in-view'); }, 1780);
})();

/* hero phone: 3D tilt on pointer, idle float via CSS */
(function(){
  if(REDUCED_MOTION || !POINTER_FINE) return;
  const visual = document.querySelector('.hero-visual');
  const phone = document.querySelector('.phone');
  if(!visual || !phone) return;
  visual.addEventListener('mousemove', (e)=>{
    const rect = visual.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    phone.style.transform = `rotateY(${relX*14}deg) rotateX(${relY*-14}deg)`;
  });
  visual.addEventListener('mouseleave', ()=>{ phone.style.transform = ''; });
})();

/* headline word-mask reveal, applied to every h2.section-title */
function wrapTitleWords(el){
  const text = el.textContent;
  el.innerHTML = text.split(' ').map(w=>`<span class="word"><span class="word-inner">${w}</span></span>`).join(' ');
}
function initTitleReveal(el, observe){
  wrapTitleWords(el);
  const words = el.querySelectorAll('.word-inner');
  if(REDUCED_MOTION){ el.classList.add('in-view'); return; }
  words.forEach((w,i)=>{ w.style.transitionDelay = (i*40)+'ms'; });
  el.classList.remove('in-view');
  if(observe){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ el.classList.add('in-view'); obs.unobserve(el); }
      });
    }, {threshold:0.4});
    obs.observe(el);
  } else {
    requestAnimationFrame(()=> requestAnimationFrame(()=> el.classList.add('in-view')));
  }
}
document.querySelectorAll('h2.section-title').forEach(el=>initTitleReveal(el, true));

/* how it works: highlight the step in view as you scroll */
(function(){
  const steps = document.querySelectorAll('.step-item');
  if(!steps.length) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ entry.target.classList.toggle('active', entry.isIntersecting); });
  }, {threshold:0.55});
  steps.forEach(s=>obs.observe(s));
})();

/* cursor spotlight glow on dark sections */
(function(){
  if(REDUCED_MOTION || !POINTER_FINE) return;
  document.querySelectorAll('.spotlight').forEach(spot=>{
    const section = spot.parentElement;
    section.addEventListener('mousemove', (e)=>{
      const r = section.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      spot.style.setProperty('--sx', x + '%');
      spot.style.setProperty('--sy', y + '%');
    });
    section.addEventListener('mouseenter', ()=> spot.classList.add('active'));
    section.addEventListener('mouseleave', ()=> spot.classList.remove('active'));
  });
})();

/* magnetic pull — reserved for the two highest-intent conversion CTAs only,
   not every button, so the effect reads as deliberate rather than decorative */
(function(){
  if(REDUCED_MOTION || !POINTER_FINE) return;
  const magneticIds = ['hero-cta-primary', 'pilotSubmit'];
  magneticIds.forEach(id=>{
    const btn = document.getElementById(id);
    if(!btn) return;
    btn.addEventListener('mousemove', (e)=>{
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.15}px, ${y*0.25}px)`;
    });
    btn.addEventListener('mouseleave', ()=>{ btn.style.transform = ''; });
  });
})();

/* phone mockup: gentle live cycling between the two sample options */
(function(){
  if(REDUCED_MOTION) return;
  const opts = document.querySelectorAll('.mini-opt');
  if(opts.length < 2) return;
  let active = 0;
  let interval = null;
  function cycle(){
    opts.forEach(o=>o.classList.remove('sel'));
    opts[active].classList.add('sel');
    active = (active + 1) % opts.length;
  }
  const wrap = document.querySelector('.phone-float');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting && !interval){ interval = setInterval(cycle, 2800); }
      else if(!entry.isIntersecting && interval){ clearInterval(interval); interval = null; }
    });
  }, {threshold:0.4});
  if(wrap) obs.observe(wrap);
})();

/* ============ HERO LOAD ANIMATION (single orchestrated pass) ============ */
window.addEventListener('DOMContentLoaded', ()=>{
  const heroCopy = document.querySelector('.hero-copy');
  const heroVisual = document.querySelector('.hero-visual');
  [heroCopy, heroVisual].forEach((el,i)=>{
    if(!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    setTimeout(()=>{ el.style.opacity='1'; el.style.transform='translateY(0)'; }, 120 + i*120);
  });
});
