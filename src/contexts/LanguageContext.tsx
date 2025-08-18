import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'header.phone': '+1 (234) 567-8900',
    'header.email': 'info@tradingsana.com',
    'header.tagline': 'Professional Industrial Solutions',
    'header.company': 'TradingSANA',
    'header.subtitle': 'Industrial Solutions',
    'header.home': 'Home',
    'header.products': 'Products',
    'header.about': 'About',
    'header.projects': 'Projects',
    'header.contact': 'Contact',
    'header.getQuote': 'Get Quote',
    'header.contactUs': 'Contact Us',

    // Hero Section
    'hero.badge': 'Industry Leading Solutions',
    'hero.title1': 'Industrial Ventilation',
    'hero.title2': '& HVAC Excellence',
    'hero.description': 'Leading provider of premium ventilation systems, VRF units, fire pumps, and comprehensive HVAC solutions. Engineering excellence for commercial and industrial applications worldwide.',
    'hero.exploreProducts': 'Explore Products',
    'hero.downloadCatalog': 'Download Catalog',
    'hero.clients': 'Happy Clients',
    'hero.experience': 'Years Experience',
    'hero.projects': 'Projects Completed',
    'hero.support': 'Support Available',
    'hero.fanCard': 'Premium Rosenberg Fans',
    'hero.fanSubtitle': 'German engineered ventilation systems',

    // Product Categories
    'products.badge': 'Complete Product Range',
    'products.title': 'Our Product Categories',
    'products.description': 'Comprehensive range of industrial ventilation and HVAC solutions designed for optimal performance and energy efficiency',
    'products.fans.title': 'Fan Systems',
    'products.fans.description': 'Premium Rosenberg ventilation fans for industrial and commercial applications',
    'products.vrf.title': 'VRF Units',
    'products.vrf.description': 'Variable Refrigerant Flow systems for efficient climate control',
    'products.fire.title': 'Fire Pumps',
    'products.fire.description': 'Bristol firefighting pumps for critical safety applications',
    'products.parking.title': 'Parking Ventilation',
    'products.parking.description': 'Complete jet fan systems for underground parking facilities',
    'products.curtains.title': 'Air Curtains',
    'products.curtains.description': 'Commercial air curtains for entrance protection and climate control',
    'products.hvac.title': 'HVAC Solutions',
    'products.hvac.description': 'Complete heating, ventilation, and air conditioning systems',
    'products.learnMore': 'Learn More',
    'products.viewAll': 'View All Products',

    // About Section
    'about.badge': 'Industry Leader Since 2008',
    'about.title': 'Engineering Excellence in Industrial Solutions',
    'about.description1': 'TradingSANA has been at the forefront of industrial ventilation and HVAC solutions for over 15 years. We specialize in providing cutting-edge equipment from world-renowned manufacturers including Rosenberg, Bristol, and other premium brands.',
    'about.description2': 'Our expertise spans across multiple sectors including manufacturing, automotive, commercial buildings, and critical infrastructure. We don\'t just supply equipment – we provide comprehensive solutions tailored to your specific requirements.',
    'about.certifications': 'Quality Certifications',
    'about.learnMore': 'Learn More About Us',
    'about.downloadProfile': 'Download Company Profile',
    'about.globalReach.title': 'Global Reach',
    'about.globalReach.description': 'Serving clients worldwide with premium industrial solutions',
    'about.expertEngineering.title': 'Expert Engineering',
    'about.expertEngineering.description': '15+ years of experience in HVAC and ventilation systems',
    'about.dedicatedSupport.title': 'Dedicated Support',
    'about.dedicatedSupport.description': '24/7 technical support and maintenance services',

    // Partners
    'partners.title': 'Trusted Partners',
    'partners.description': 'We collaborate with world-leading manufacturers and certification bodies to ensure the highest quality standards',
    'partners.partnerWithUs': 'Partner With Us',
    'partners.interested': 'Interested in becoming a partner? We\'re always looking for innovative companies to collaborate with.',

    // Footer
    'footer.description': 'Leading provider of industrial ventilation and HVAC solutions. Engineering excellence for commercial and industrial applications worldwide.',
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Our Products',
    'footer.contact': 'Contact Info',
    'footer.stayUpdated': 'Stay Updated',
    'footer.newsletterDescription': 'Subscribe to our newsletter for the latest product updates and industry insights.',
    'footer.emailPlaceholder': 'Your email address',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 TradingSANA. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.sitemap': 'Sitemap',

    // Projects Page
    'projects.badge': 'Portfolio Showcase',
    'projects.title': 'Our Featured Projects',
    'projects.description': 'Discover our successful installations and engineering solutions across diverse industries worldwide',
    'projects.allProjects': 'All Projects',
    'projects.manufacturing': 'Manufacturing',
    'projects.commercial': 'Commercial',
    'projects.automotive': 'Automotive',
    'projects.infrastructure': 'Infrastructure',
    'projects.viewProject': 'View Project',
    'projects.projectCompleted': 'Project Completed',
    'projects.clientSatisfaction': 'Client Satisfaction',
    'projects.energySavings': 'Energy Savings',
    'projects.caseStudies': 'Case Studies',

    // Products Page
    'productsPage.badge': 'Complete Product Range',
    'productsPage.title': 'Industrial Products & Solutions',
    'productsPage.description': 'Comprehensive range of premium ventilation, HVAC, and fire safety equipment from world-leading manufacturers',
    'productsPage.customSolutionTitle': 'Need a Custom Solution?',
    'productsPage.customSolutionDesc': 'Our engineering team can design and supply custom ventilation and HVAC solutions tailored to your specific requirements and applications.',
    'productsPage.contactEngineering': 'Contact Engineering Team',
    'productsPage.downloadCatalogs': 'Download Technical Catalogs',

    // Contact Page
    'contact.badge': 'Get In Touch',
    'contact.title': 'Contact Our Expert Team',
    'contact.description': 'Ready to discuss your industrial ventilation and HVAC needs? Our experienced team is here to provide expert guidance and tailored solutions.',
    'contact.visitOffice': 'Visit Our Office',
    'contact.callUs': 'Call Us',
    'contact.emailUs': 'Email Us',
    'contact.businessHours': 'Business Hours',
    'contact.sendMessage': 'Send us a Message',
    'contact.formDescription': 'Fill out the form below and we\'ll get back to you within 24 hours.',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name',
    'contact.inquiryType': 'Inquiry Type',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.sendBtn': 'Send Message',
    'contact.scheduleCall': 'Schedule Call',
    'contact.privacyNote': 'By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties.',
    'contact.immediateAssistance': 'Need Immediate Assistance?',
    'contact.emergencyDesc': 'For urgent technical support or emergency services, call our 24/7 hotline.',
    'contact.emergencySupport': 'Emergency Support',
    'contact.liveChat': 'Live Chat',
    'contact.officeHours': 'Office Hours',
    'contact.mondayFriday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.emergencyOnly': 'Emergency Only',
    'contact.emergencyAvailable': 'Emergency Support',
    'contact.available247': '24/7 Available',

    // About Page
    'aboutPage.badge': 'About TradingSANA',
    'aboutPage.title': 'Engineering Excellence Since 2008',
    'aboutPage.description': 'For over 15 years, we\'ve been delivering world-class industrial ventilation and HVAC solutions that power critical infrastructure and commercial facilities worldwide.',
    'aboutPage.story': 'Our Story',
    'aboutPage.storyDesc1': 'TradingSANA was founded with a simple yet ambitious vision: to provide the highest quality industrial ventilation and HVAC solutions to businesses across diverse industries. What started as a specialized ventilation equipment supplier has evolved into a comprehensive industrial solutions provider.',
    'aboutPage.storyDesc2': 'Our partnership with world-renowned manufacturers like Rosenberg, Bristol, and other industry leaders allows us to offer cutting-edge technology and unmatched reliability. We don\'t just supply equipment – we engineer complete solutions tailored to each client\'s unique requirements.',
    'aboutPage.storyDesc3': 'Today, we\'re proud to have completed over 1000 projects across manufacturing, automotive, commercial, and critical infrastructure sectors, establishing ourselves as a trusted partner for industrial excellence.',
    'aboutPage.values': 'Our Core Values',
    'aboutPage.valuesDesc': 'The principles that guide everything we do and drive our commitment to excellence',
    'aboutPage.qualityExcellence': 'Quality Excellence',
    'aboutPage.qualityDesc': 'We maintain the highest standards in every product and service we deliver, ensuring reliability and performance that exceeds expectations.',
    'aboutPage.innovation': 'Innovation',
    'aboutPage.innovationDesc': 'Continuously advancing our solutions through cutting-edge technology and engineering expertise to meet evolving industry needs.',
    'aboutPage.customerFocus': 'Customer Focus',
    'aboutPage.customerDesc': 'Our clients\' success drives everything we do. We provide personalized solutions and exceptional support throughout every project.',
    'aboutPage.precisionEngineering': 'Precision Engineering',
    'aboutPage.precisionDesc': 'Every system is precisely designed and engineered to deliver optimal performance, efficiency, and long-term reliability.',
    'aboutPage.journey': 'Our Journey',
    'aboutPage.journeyDesc': 'Key milestones in our growth and evolution as an industry leader',
    'aboutPage.certifications': 'Quality Certifications',
    'aboutPage.certificationsDesc': 'Our commitment to quality is validated by industry-leading certifications and standards',
    'aboutPage.readyToWork': 'Ready to Work Together?',
    'aboutPage.workDesc': 'Let\'s discuss how our expertise and solutions can help optimize your industrial operations and achieve your project goals.',
    'aboutPage.startProject': 'Start Your Project',
    'aboutPage.scheduleConsultation': 'Schedule Consultation',

    // Common
    'common.500Plus': '500+',
    'common.15Plus': '15+',
    'common.1000Plus': '1000+',
    'common.24/7': '24/7'
  },

  ar: {
    // Header
    'header.phone': '+1 (234) 567-8900',
    'header.email': 'info@tradingsana.com',
    'header.tagline': 'حلول صناعية احترافية',
    'header.company': 'TradingSANA',
    'header.subtitle': 'الحلول الصناعية',
    'header.home': 'الرئيسية',
    'header.products': 'المنتجات',
    'header.about': 'من نحن',
    'header.projects': 'المشاريع',
    'header.contact': 'اتصل بنا',
    'header.getQuote': 'احصل على عرض',
    'header.contactUs': 'اتصل بنا',

    // Hero Section
    'hero.badge': 'حلول صناعية رائدة',
    'hero.title1': 'أنظمة التهوية الصناعية',
    'hero.title2': 'وتميز التكييف',
    'hero.description': 'مزود رائد لأنظمة التهوية المتقدمة، وحدات التدفق المتغير، مضخات الحريق، وحلول التكييف الشاملة. التميز الهندسي للتطبيقات التجارية والصناعية عالمياً.',
    'hero.exploreProducts': 'استكشف المنتجات',
    'hero.downloadCatalog': 'تحميل الكتالوج',
    'hero.clients': 'عملاء راضون',
    'hero.experience': 'سنوات خبرة',
    'hero.projects': 'مشاريع مكتملة',
    'hero.support': 'دعم متاح',
    'hero.fanCard': 'مراوح روزنبرغ المتقدمة',
    'hero.fanSubtitle': 'أنظمة تهوية ألمانية مطورة',

    // Product Categories
    'products.badge': 'مجموعة منتجات كاملة',
    'products.title': 'فئات منتجاتنا',
    'products.description': 'مجموعة شاملة من حلول التهوية الصناعية والتكييف مصممة للأداء الأمثل وكفاءة الطاقة',
    'products.fans.title': 'أنظمة المراوح',
    'products.fans.description': 'مراوح التهوية المتقدمة من روزنبرغ للتطبيقات الصناعية والتجارية',
    'products.vrf.title': 'وحدات VRF',
    'products.vrf.description': 'أنظمة التدفق المتغير للتحكم الفعال في المناخ',
    'products.fire.title': 'مضخات الحريق',
    'products.fire.description': 'مضخات إطفاء بريستول للتطبيقات الأمنية الحرجة',
    'products.parking.title': 'تهوية المواقف',
    'products.parking.description': 'أنظمة مراوح نفاثة كاملة لمرافق المواقف تحت الأرض',
    'products.curtains.title': 'ستائر الهواء',
    'products.curtains.description': 'ستائر هواء تجارية لحماية المداخل والتحكم في المناخ',
    'products.hvac.title': 'حلول التكييف',
    'products.hvac.description': 'أنظمة التدفئة والتهوية وتكييف الهواء الكاملة',
    'products.learnMore': 'اعرف المزيد',
    'products.viewAll': 'عرض جميع المنتجات',

    // About Section
    'about.badge': 'رائد الصناعة منذ 2008',
    'about.title': 'التميز الهندسي في الحلول الصناعية',
    'about.description1': 'كانت TradingSANA في المقدمة في حلول التهوية الصناعية والتكييف لأكثر من 15 عاماً. نتخصص في توفير المعدات المتطورة من الشركات المصنعة ذات الشهرة العالمية بما في ذلك روزنبرغ وبريستول وعلامات تجارية متقدمة أخرى.',
    'about.description2': 'تمتد خبرتنا عبر قطاعات متعددة بما في ذلك التصنيع والسيارات والمباني التجارية والبنية التحتية الحرجة. نحن لا نوفر المعدات فقط - بل نقدم حلولاً شاملة مصممة وفقاً لمتطلباتكم المحددة.',
    'about.certifications': 'شهادات الجودة',
    'about.learnMore': 'اعرف المزيد عنا',
    'about.downloadProfile': 'تحميل ملف الشركة',
    'about.globalReach.title': 'نطاق عالمي',
    'about.globalReach.description': 'خدمة العملاء في جميع أنحاء العالم بحلول صناعية متقدمة',
    'about.expertEngineering.title': 'هندسة خبيرة',
    'about.expertEngineering.description': 'أكثر من 15 عاماً من الخبرة في أنظمة التكييف والتهوية',
    'about.dedicatedSupport.title': 'دعم مخصص',
    'about.dedicatedSupport.description': 'دعم فني وخدمات صيانة على مدار 24/7',

    // Partners
    'partners.title': 'شركاء موثوقون',
    'partners.description': 'نتعاون مع الشركات المصنعة الرائدة عالمياً وهيئات الاعتماد لضمان أعلى معايير الجودة',
    'partners.partnerWithUs': 'شاركنا',
    'partners.interested': 'مهتم بأن تصبح شريكاً؟ نحن نبحث دائماً عن شركات مبتكرة للتعاون معها.',

    // Footer
    'footer.description': 'مزود رائد لحلول التهوية الصناعية والتكييف. التميز الهندسي للتطبيقات التجارية والصناعية عالمياً.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.products': 'منتجاتنا',
    'footer.contact': 'معلومات الاتصال',
    'footer.stayUpdated': 'ابق محدثاً',
    'footer.newsletterDescription': 'اشترك في نشرتنا الإخبارية للحصول على أحدث تحديثات المنتجات ورؤى الصناعة.',
    'footer.emailPlaceholder': 'عنوان بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.copyright': '© 2024 TradingSANA. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.sitemap': 'خريطة الموقع',

    // Projects Page
    'projects.badge': 'عرض المحفظة',
    'projects.title': 'مشاريعنا المميزة',
    'projects.description': 'اكتشف تركيباتنا الناجحة والحلول الهندسية عبر صناعات متنوعة في جميع أنحاء العالم',
    'projects.allProjects': 'جميع المشاريع',
    'projects.manufacturing': 'التصنيع',
    'projects.commercial': 'تجاري',
    'projects.automotive': 'السيارات',
    'projects.infrastructure': 'البنية التحتية',
    'projects.viewProject': 'عرض المشروع',
    'projects.projectCompleted': 'مشروع مكتمل',
    'projects.clientSatisfaction': 'رضا العميل',
    'projects.energySavings': 'توفير الطاقة',
    'projects.caseStudies': 'دراسات الحالة',

    // Products Page
    'productsPage.badge': 'مجموعة منتجات كاملة',
    'productsPage.title': 'المنتجات والحلول الصناعية',
    'productsPage.description': 'مجموعة شاملة من معدات التهوية المتقدمة والتكييف وأمان الحريق من الشركات المصنعة الرائدة عالمياً',
    'productsPage.customSolutionTitle': 'تحتاج إلى حل مخصص؟',
    'productsPage.customSolutionDesc': 'يمكن لفريق الهندسة لدينا تصميم وتوريد حلول تهوية وتكييف مخصصة مصممة وفقاً لمتطلباتكم وتطبيقاتكم المحددة.',
    'productsPage.contactEngineering': 'اتصل بفريق الهندسة',
    'productsPage.downloadCatalogs': 'تحميل الكتالوجات التقنية',

    // Contact Page
    'contact.badge': 'تواصل معنا',
    'contact.title': 'اتصل بفريق الخبراء لدينا',
    'contact.description': 'مستعد لمناقشة احتياجاتك من التهوية الصناعية والتكييف؟ فريقنا المتمرس هنا لتقديم التوجيه المتخصص والحلول المصممة خصيصاً.',
    'contact.visitOffice': 'زر مكتبنا',
    'contact.callUs': 'اتصل بنا',
    'contact.emailUs': 'راسلنا',
    'contact.businessHours': 'ساعات العمل',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.formDescription': 'املأ النموذج أدناه وسنعاود الاتصال بك خلال 24 ساعة.',
    'contact.firstName': 'الاسم الأول',
    'contact.lastName': 'اسم العائلة',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'اسم الشركة',
    'contact.inquiryType': 'نوع الاستفسار',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.sendBtn': 'إرسال رسالة',
    'contact.scheduleCall': 'جدولة مكالمة',
    'contact.privacyNote': 'بإرسال هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة بنا. نحن نحترم خصوصيتك ولن نشارك معلوماتك مع أطراف ثالثة أبداً.',
    'contact.immediateAssistance': 'تحتاج مساعدة فورية؟',
    'contact.emergencyDesc': 'للدعم الفني العاجل أو خدمات الطوارئ، اتصل بخط الطوارئ على مدار 24/7.',
    'contact.emergencySupport': 'دعم الطوارئ',
    'contact.liveChat': 'دردشة مباشرة',
    'contact.officeHours': 'ساعات المكتب',
    'contact.mondayFriday': 'الاثنين - الجمعة',
    'contact.saturday': 'السبت',
    'contact.sunday': 'الأحد',
    'contact.emergencyOnly': 'طوارئ فقط',
    'contact.emergencyAvailable': 'دعم الطوارئ',
    'contact.available247': '24/7 متاح',

    // About Page
    'aboutPage.badge': 'حول TradingSANA',
    'aboutPage.title': 'التميز الهندسي منذ 2008',
    'aboutPage.description': 'لأكثر من 15 عاماً، كنا نقدم حلول التهوية الصناعية والتكييف عالمية المستوى التي تشغل البنية التحتية الحرجة والمرافق التجارية في جميع أنحاء العالم.',
    'aboutPage.story': 'قصتنا',
    'aboutPage.storyDesc1': 'تأسست TradingSANA برؤية بسيطة ولكن طموحة: توفير أعلى جودة من حلول التهوية الصناعية والتكييف للشركات عبر صناعات متنوعة. ما بدأ كمورد متخصص لمعدات التهوية تطور إلى مزود حلول صناعية شاملة.',
    'aboutPage.storyDesc2': 'شراكتنا مع الشركات المصنعة ذات الشهرة العالمية مثل روزنبرغ وبريستول وقادة الصناعة الآخرين تتيح لنا تقديم التكنولوجيا المتطورة والموثوقية التي لا مثيل لها. نحن لا نوفر المعدات فقط - بل نهندس حلولاً كاملة مصممة وفقاً لمتطلبات كل عميل الفريدة.',
    'aboutPage.storyDesc3': 'اليوم، نفخر بإتمام أكثر من 1000 مشروع عبر قطاعات التصنيع والسيارات والتجارية والبنية التحتية الحرجة، مما يثبت أنفسنا كشريك موثوق للتميز الصناعي.',
    'aboutPage.values': 'قيمنا الأساسية',
    'aboutPage.valuesDesc': 'المبادئ التي توجه كل ما نقوم به وتقود التزامنا بالتميز',
    'aboutPage.qualityExcellence': 'تميز الجودة',
    'aboutPage.qualityDesc': 'نحن نحافظ على أعلى المعايير في كل منتج وخدمة نقدمها، مما يضمن الموثوقية والأداء الذي يتجاوز التوقعات.',
    'aboutPage.innovation': 'الابتكار',
    'aboutPage.innovationDesc': 'التقدم المستمر في حلولنا من خلال التكنولوجيا المتطورة والخبرة الهندسية لتلبية احتياجات الصناعة المتطورة.',
    'aboutPage.customerFocus': 'التركيز على العميل',
    'aboutPage.customerDesc': 'نجاح عملائنا يقود كل ما نقوم به. نحن نقدم حلولاً شخصية ودعماً استثنائياً طوال كل مشروع.',
    'aboutPage.precisionEngineering': 'الهندسة الدقيقة',
    'aboutPage.precisionDesc': 'كل نظام مصمم ومهندس بدقة لتقديم الأداء الأمثل والكفاءة والموثوقية طويلة المدى.',
    'aboutPage.journey': 'رحلتنا',
    'aboutPage.journeyDesc': 'المعالم الرئيسية في نمونا وتطورنا كرائد في الصناعة',
    'aboutPage.certifications': 'شهادات الجودة',
    'aboutPage.certificationsDesc': 'التزامنا بالجودة مصدق عليه من قبل الشهادات والمعايير الرائدة في الصناعة',
    'aboutPage.readyToWork': 'مستعد للعمل معاً؟',
    'aboutPage.workDesc': 'دعنا نناقش كيف يمكن لخبرتنا وحلولنا أن تساعد في تحسين عملياتك الصناعية وتحقيق أهداف مشروعك.',
    'aboutPage.startProject': 'ابدأ مشروعك',
    'aboutPage.scheduleConsultation': 'جدولة استشارة',

    // Common
    'common.500Plus': '+500',
    'common.15Plus': '+15',
    'common.1000Plus': '+1000',
    'common.24/7': '24/7'
  },

  ur: {
    // Header
    'header.phone': '+1 (234) 567-8900',
    'header.email': 'info@tradingsana.com',
    'header.tagline': 'پیشہ ور صنعتی حل',
    'header.company': 'TradingSANA',
    'header.subtitle': 'صنعتی حل',
    'header.home': 'ہوم',
    'header.products': 'پروڈکٹس',
    'header.about': 'ہمارے بارے میں',
    'header.projects': 'پروجیکٹس',
    'header.contact': 'رابطہ',
    'header.getQuote': 'قیمت حاصل کریں',
    'header.contactUs': 'ہم سے رابطہ کریں',

    // Hero Section
    'hero.badge': 'صنعت کے معیار کے حل',
    'hero.title1': 'صنعتی ہوا کی گردش',
    'hero.title2': 'اور HVAC کی عمدگی',
    'hero.description': 'پریمیم وینٹیلیشن سسٹم، VRF یونٹس، فائر پمپس، اور جامع HVAC حل کا معیار فراہم کنندہ۔ دنیا بھر میں تجارتی اور صنعتی ایپلیکیشنز کے لیے انجینئرنگ کی عمدگی۔',
    'hero.exploreProducts': 'پروڈکٹس دیکھیں',
    'hero.downloadCatalog': 'کیٹالاگ ڈاؤن لوڈ کریں',
    'hero.clients': 'خوش کلائنٹس',
    'hero.experience': 'سال تجربہ',
    'hero.projects': 'مکمل پروجیکٹس',
    'hero.support': 'سپورٹ دستیاب',
    'hero.fanCard': 'پریمیم روزن برگ فینز',
    'hero.fanSubtitle': 'جرمن انجینئرڈ وینٹیلیشن سسٹم',

    // Product Categories
    'products.badge': 'مکمل پروڈکٹ رینج',
    'products.title': 'ہماری پروڈکٹ کیٹگریز',
    'products.description': 'بہترین کارکردگی اور توانائی کی کارکردگی کے لیے ڈیزائن کردہ صنعتی وینٹیلیشن اور HVAC حل کی جامع رینج',
    'products.fans.title': 'فین سسٹمز',
    'products.fans.description': 'صنعتی اور تجارتی ایپلیکیشنز کے لیے پریمیم روزن برگ وینٹیلیشن فینز',
    'products.vrf.title': 'VRF یونٹس',
    'products.vrf.description': 'موثر آب و ہوا کنٹرول کے لیے ویری ایبل ریفریجرنٹ فلو سسٹم',
    'products.fire.title': 'فائر پمپس',
    'products.fire.description': 'اہم سیفٹی ایپلیکیشنز کے لیے برسٹل فائر فائٹنگ پمپس',
    'products.parking.title': 'پارکنگ وینٹیلیشن',
    'products.parking.description': 'زیر زمین پارکنگ سہولات کے لیے مکمل جیٹ فین سسٹم',
    'products.curtains.title': 'ایئر کرٹینز',
    'products.curtains.description': 'داخلی راستوں کی حفاظت اور آب و ہوا کنٹرول کے لیے تجارتی ایئر کرٹینز',
    'products.hvac.title': 'HVAC حل',
    'products.hvac.description': 'مکمل ہیٹنگ، وینٹیلیشن، اور ایئر کنڈیشننگ سسٹم',
    'products.learnMore': 'مزید جانیں',
    'products.viewAll': 'تمام پروڈکٹس دیکھیں',

    // About Section
    'about.badge': '2008 سے صنعت کا رہنما',
    'about.title': 'صنعتی حل میں انجینئرنگ کی عمدگی',
    'about.description1': 'TradingSANA 15 سال سے زیادہ عرصے سے صنعتی وینٹیلیشن اور HVAC حل میں سب سے آگے رہا ہے۔ ہم روزن برگ، برسٹل، اور دیگر پریمیم برانڈز سمیت عالمی شہرت یافتہ مینوفیکچررز سے جدید ترین آلات فراہم کرنے میں مہارت رکھتے ہیں۔',
    'about.description2': 'ہماری مہارت مینوفیکچرنگ، آٹوموٹو، کمرشل بلڈنگز، اور اہم انفراسٹرکچر سمیت متعدد شعبوں میں پھیلی ہوئی ہے۔ ہم صرف آلات فراہم نہیں کرتے - بلکہ آپ کی مخصوص ضروریات کے مطابق جامع حل فراہم کرتے ہیں۔',
    'about.certifications': 'کوالٹی سرٹیفیکیشنز',
    'about.learnMore': 'ہمارے بارے میں مزید جانیں',
    'about.downloadProfile': 'کمپنی پروفائل ڈاؤن لوڈ کریں',
    'about.globalReach.title': 'عالمی رسائی',
    'about.globalReach.description': 'پریمیم صنعتی حل کے ساتھ دنیا بھر میں کلائنٹس کی خدمت',
    'about.expertEngineering.title': 'ماہر انجینئرنگ',
    'about.expertEngineering.description': 'HVAC اور وینٹیلیشن سسٹم میں 15+ سال کا تجربہ',
    'about.dedicatedSupport.title': 'مخصوص سپورٹ',
    'about.dedicatedSupport.description': '24/7 تکنیکی سپورٹ اور مینٹیننس سروسز',

    // Partners
    'partners.title': 'قابل اعتماد پارٹنرز',
    'partners.description': 'ہم اعلیٰ ترین کوالٹی کے معیار کو یقینی بنانے کے لیے عالمی معیار کے مینوفیکچررز اور سرٹیفیکیشن اداروں کے ساتھ تعاون کرتے ہیں',
    'partners.partnerWithUs': 'ہمارے ساتھ پارٹنر بنیں',
    'partners.interested': 'پارٹنر بننے میں دلچسپی ہے؟ ہم ہمیشہ تعاون کے لیے جدید کمپنیوں کی تلاش میں رہتے ہیں۔',

    // Footer
    'footer.description': 'صنعتی وینٹیلیشن اور HVAC حل کا معیار فراہم کنندہ۔ دنیا بھر میں تجارتی اور صنعتی ایپلیکیشنز کے لیے انجینئرنگ کی عمدگی۔',
    'footer.quickLinks': 'فوری لنکس',
    'footer.products': 'ہماری پروڈکٹس',
    'footer.contact': 'رابطہ کی معلومات',
    'footer.stayUpdated': 'اپ ڈیٹ رہیں',
    'footer.newsletterDescription': 'تازہ ترین پروڈکٹ اپ ڈیٹس اور صنعتی بصیرت کے لیے ہمارے نیوز لیٹر کو سبسکرائب کریں۔',
    'footer.emailPlaceholder': 'آپ کا ای میل ایڈریس',
    'footer.subscribe': 'سبسکرائب کریں',
    'footer.copyright': '© 2024 TradingSANA۔ تمام حقوق محفوظ ہیں۔',
    'footer.privacy': 'پرائیویسی پالیسی',
    'footer.terms': 'سروس کی شرائط',
    'footer.sitemap': 'سائٹ میپ',

    // Common
    'common.500Plus': '+500',
    'common.15Plus': '+15',
    'common.1000Plus': '+1000',
    'common.24/7': '24/7'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('tradingsana-language');
    return (saved as Language) || 'en';
  });

  const isRTL = language === 'ar' || language === 'ur';

  useEffect(() => {
    localStorage.setItem('tradingsana-language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}