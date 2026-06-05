
(function() {
  'use strict';

  // Translation dictionary - matches exact phrases to avoid code corruption
  const translations = {
    // Navigation & menu
    "Work": "折腾",
    "Services": "服务",
    "About": "关于",
    "Contact": "联系",
    "Articles": "文章",
    "Gallery": "图库",
    "Lab": "实验室",
    "WORK": "折腾",
    "SERVICES": "服务",
    "ABOUT": "关于",
    "CONTACT": "联系",
    "ARTICLES": "文章",
    "LAB": "实验室",
    "WORK WORK": "折腾折腾",
    "SERVICES SERVICES": "服务服务",
    "ABOUT ABOUT": "关于关于",
    "CONTACT CONTACT": "联系联系",
    "ARTICLES ARTICLES": "文章文章",
    "GALLERY": "图库",
    "GALLERY GALLERY": "图库图库",
    "LAB LAB": "实验室实验室",
    "WorkWork": "折腾",
    "ServicesServices": "服务",
    "AboutAbout": "关于",
    "ContactContact": "联系",
    "ArticlesArticles": "文章",
    "GalleryGallery": "图库",
    "LabLab": "实验室",
    "Skip to main content": "跳至主内容",
    "Work carousel": "折腾轮播",
    "Hey!": "自序",
    "Let's talk": "聊聊吧",
    "Fun Stuff": "有趣的事",
    "get in touch": "联系我们",
    "Let's talkFun Stuff": "聊聊吧有趣的事",
    "I'm a full stack creative which means I can help take any project from ground zero to an award-worthy launch. If you have a project you'd like to discuss then please get in touch .": "我是一名全栈创意人，这意味着我可以帮助任何项目从零开始直到值得获奖的发布。如果您有项目想讨论，请随时联系我们。",
    "For 16 years, I was the owner and Creative Director at a multi-award-winning creative agency working on a diverse range of projects for some of the world's largest organisations. I now work in collaboration with agencies and brands across the globe.": "16年来，我曾是一家屡获殊荣的创意机构的所有者和创意总监，为一些全球大型组织处理过各种各样的项目。现在我与全球各地的机构和品牌合作。",
    "Whether setting the direction through intelligent brand strategy, or tactical execution through digital and offline channels, I help businesses of all sizes to communicate more effectively.": "无论是通过智慧的品牌策略设定方向，还是通过数字和线下渠道的战术执行，我都能帮助各种规模的企业更有效地沟通。",
    
    // Contact & Footer
    "hello@daveholloway.uk": "jinyuer@gmail.com",
    "Book a video call": "预约视频通话",
    "Ready to play?": "准备好了吗？",
    
    // Sections
    "Roster": "合作客户",
    "Awards": "奖项",
    "View Project": "查看折腾",
    
    // Brand
    "Dave Holloway": "JinyuStudio",
    "© 2026 Dave Holloway": "© 2026 JinyuStudio",
    
    // Service tags (uppercase)
    "CLIENT": "客户",
    "WEB": "网页",
    "BRANDING": "品牌",
    "WORDPRESS": "WordPress",
    "ANIMATION": "动画",
    "MARKETING": "营销",
    "WOOCOMMERCE": "WooCommerce",
    "ILLUSTRATION": "插画",
    "CAMPAIGN": "活动",
    "CAMPAIGNS": "活动",
    "STRATEGY": "策略",
    "DESIGN": "设计",
    "PROTOTYPES": "原型",
    "COMPONENTS": "组件",
    "DESIGN SYSTEMS": "设计系统",
    "FIGMA": "Figma",
    "WIREFRAMES": "线框图",
    "INTERACTIONS": "交互",
    "USER JOURNEYS": "用户旅程",
    "CSS/HTML/JS": "CSS/HTML/JS",
    "GSAP": "GSAP",
    "ASTRO": "Astro",
    "GIT": "Git",
    "BRICKS": "Bricks",
    "AGENTIC": "Agentic",
    "CURSOR": "Cursor",
    "INTERVIEWS": "访谈",
    "REPORTS": "报告",
    "PERSONALITY": "人格",
    "VALUE PROPOSITION": "价值主张",
    "WORKSHOPS": "工作坊",
    "NAMING": "命名",
    "VALUES": "价值观",
    "POSITIONING": "定位",
    "GUIDELINES": "指南",
    "ACTIVATION": "激活",
    "LOGOS": "标志",
    "CONCEPTS": "概念",
    "TEMPLATES": "模板",
    "MOODBOARDS": "情绪板",
    "ASSETS": "资产",
    "ARTWORK": "艺术作品",
    "BOOK DESIGN": "书籍设计",
    "LEAFLETS": "传单",
    "PRINT": "印刷",
    "ENVIRONMENTAL": "环境",
    "ANNUAL REPORTS": "年度报告",
    "POSTERS": "海报",
    "PREMIERE": "Premiere",
    "LOTTIE": "Lottie",
    "AFTER EFFECTS": "After Effects",
    "MOTION.PAGE": "Motion.Page",
    "AI VIDEO": "AI视频",
    "ILLUSTRATOR": "Illustrator",
    "GRAPHIC": "图形",
    "PHOTOSHOP": "Photoshop",
    "VECTOR": "矢量",
    "AI COMPS": "AI合成",
    "ANIMATED": "动画化",
    "PLANNING": "规划",
    "ART DIRECTION": "艺术指导",
    "LEADERSHIP": "领导力",
    "PITCHES": "提案",
    "BUDGETING": "预算",
    "PRESENTATIONS": "演示",
    
    // Hero section text (full phrases)
    "You've arrived at the portfolio of JinyuStudio – a full stack freelance designer, creative developer and strategist based in Leeds, UK. Feel free to explore my work and a few of my favourite things.": "欢迎来到 JinyuStudio。生于折腾，归于自留。\n这是我在喧嚣世间圈出的一方自留地，私唤作「烟柳巷」。不为附庸风月，只因这浮躁尘世里，太多人隔着有色眼镜打量一切：目光被规训，审美被裹挟，鲜少有人愿意平视一份坦荡的真实。于是我将那些在日光下无处栖身的、未经修饰的不合时宜，尽数安放于此。\n烟是隔绝窥探的迷雾，柳是守护私密的帘幕。此巷非通衢大道，不求取悦众生，只为安顿自己，亦待同频之人。\n若你恰好路过且心生欢喜，便是缘分；若觉刺眼不适，请悄然离去，不必置喙。",
    "Freelance Designer, Creative Developer & Strategist": "自由职业设计师、创意开发者与策略师",
    "Leeds (UK)": "利兹（英国）",
    
    // About section text
    "For 16 years, I was the owner and Creative Director at a multi-award-winning creative agency working on a diverse range of projects for some of the world's largest organisations.": "过去16年，我曾是一家屡获殊荣的创意机构的老板兼创意总监，为世界上一些最大的组织服务过各种项目。",
    "I now work in collaboration with agencies and brands across the globe.": "现在我以合作方式与全球各地的机构和品牌一起工作。",
    "Whether setting the direction through intelligent brand strategy, or tactical execution through digital and offline channels, I help businesses of all sizes to communicate more effectively.": "无论是通过智慧的品牌策略设定方向，还是通过数字和线下渠道的战术执行，我都能帮助各种规模的企业更有效地沟通。",
    
    // Project descriptions
    "A cinematic brand experience for a premium production studio.": "为高端制作工作室打造的影院级品牌体验。",
    "MedTech brand identity and web platform for a cardiovascular health company.": "为心血管健康公司打造的医疗科技品牌形象与网络平台。",
    "Industrial engineering brand identity and web presence.": "工业工程品牌形象与网站建设。",
    "Sustainable forestry and land management brand identity and website.": "可持续林业和土地管理品牌形象与网站。",
    "Premium property development brand identity and marketing website.": "高端地产开发品牌形象与营销网站。",
    "Luxury hospitality brand identity and digital experience.": "奢华酒店品牌形象与数字体验。",
    "Public healthcare digital platform for NHS Bradford.": "NHS Bradford公共医疗数字平台。",
    "Specialty chemicals brand refresh and digital transformation.": "特种化学品品牌焕新与数字化转型。",
    "FinTech startup brand identity and web application.": "金融科技初创品牌形象与Web应用。",
    "E-commerce brand identity and Shopify platform.": "电商品牌形象与Shopify平台。",
    "Creative agency brand identity and portfolio website.": "创意机构品牌形象与作品集网站。",
    "A collection of experimental and personal creative projects.": "实验性与个人创意项目的集合。",
    
    // Award category labels
    "HOME": "主场",
    "AWAY": "客场",
    
    // Award descriptions (partial matches safe)
    "FWA FOTD x2": "FWA 当日最佳 x2",
    "Awwwards HM x4": "Awwwards 荣誉奖 x4",
    "CSS Design Awards SOTD x1 & SK x4": "CSS设计奖 当日最佳 x1 & 卓越 x4",
    "Orpetron SOTM x1 & SOTD x2": "Orpetron 本月最佳 x1 & 当日最佳 x2",
    "GSAP SOTD x4": "GSAP 当日最佳 x4",
    "Ecomm Design Awards SOTD x1": "电商设计奖 当日最佳 x1",
    "CSS Winner SOTD x4": "CSS Winner 当日最佳 x4",
    "Muzli Honor x1": "Muzli 荣誉 x1",
    "Creativepool Annual x2": "Creativepool 年度 x2",
    "CSS Nectar SOTD x3": "CSS Nectar 当日最佳 x3",
    "Codrops Standout Pick x1": "Codrops 精选 x1",
    "Drum DADI Award x1": "Drum DADI 奖 x1",
    "Axiom Silver Medal x1": "Axiom 银奖 x1"
  };

  // State
  let currentLang = localStorage.getItem('jinyu-lang') || 'en';
  
  // Preserve original content to avoid corruption
  const originalTexts = new Map();
  
  // Helper to translate text safely
  function translateText(text) {
    if (!text || typeof text !== 'string') return text;
    
    // Try exact match first
    if (translations[text]) {
      return translations[text];
    }
    
    // Try trimmed exact match
    const trimmed = text.trim();
    if (translations[trimmed]) {
      return translations[trimmed];
    }
    
    // Try uppercase match
    const upper = trimmed.toUpperCase();
    if (translations[upper]) {
      return translations[upper];
    }
    
    // Try lowercase match
    const lower = trimmed.toLowerCase();
    const lowerMatch = Object.keys(translations).find(key => 
      key.toLowerCase() === lower
    );
    if (lowerMatch) {
      return translations[lowerMatch];
    }
    
    // Try to detect duplicated words like "WORK WORK"
    const words = trimmed.split(/\s+/);
    if (words.length === 2 && words[0] === words[1]) {
      const singleWord = words[0];
      if (translations[singleWord]) {
        return translations[singleWord];
      }
      const singleUpper = singleWord.toUpperCase();
      if (translations[singleUpper]) {
        return translations[singleUpper];
      }
    }
    
    // If no match, return as is to avoid breaking code
    return text;
  }
  
  // Helper to check if we should skip this element
  function shouldSkipElement(el) {
    // Skip script and style tags entirely
    const tagName = el.tagName && el.tagName.toLowerCase();
    if (tagName === 'script' || tagName === 'style' || tagName === 'canvas') {
      return true;
    }
    // Skip elements with data-i18n-skip attribute
    if (el.hasAttribute && el.hasAttribute('data-i18n-skip')) {
      return true;
    }
    return false;
  }
  
  // Recursively process text nodes
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const original = originalTexts.get(node);
      const currentText = node.textContent;
      
      if (currentLang === 'zh') {
        // Translate
        if (!original) {
          originalTexts.set(node, currentText);
        }
        const translated = translateText(currentText);
        if (translated !== currentText) {
          node.textContent = translated;
        }
      } else {
        // Restore original
        if (original) {
          node.textContent = original;
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Skip certain tags
      if (shouldSkipElement(node)) return;
      
      // Translate various attributes carefully
      const attrsToTranslate = ['aria-label', 'title', 'alt', 'placeholder'];
      attrsToTranslate.forEach((attr) => {
        if (node.hasAttribute && node.hasAttribute(attr)) {
          const attrVal = node.getAttribute(attr);
          const key = `${attr}-${node}`;
          if (!originalTexts.has(key)) {
            originalTexts.set(key, attrVal);
          }
          
          if (currentLang === 'zh') {
            const translated = translateText(attrVal);
            if (translated !== attrVal) {
              node.setAttribute(attr, translated);
            }
          } else {
            const original = originalTexts.get(key);
            if (original) {
              node.setAttribute(attr, original);
            }
          }
        }
      });
      
      // Also handle innerText/textContent of elements that might not have separate text nodes
      // but this needs to be careful not to break child elements
      if (node.childNodes.length === 0 && node.textContent && node.textContent.trim()) {
        // Only handle elements without children to avoid breaking structure
        const original = originalTexts.get(`text-${node}`);
        const currentText = node.textContent;
        
        if (currentLang === 'zh') {
          if (!original) {
            originalTexts.set(`text-${node}`, currentText);
          }
          const translated = translateText(currentText);
          if (translated !== currentText) {
            node.textContent = translated;
          }
        } else {
          if (original) {
            node.textContent = original;
          }
        }
      }
      
      // Recurse children
      const children = node.childNodes;
      for (let i = 0; i < children.length; i++) {
        processNode(children[i]);
      }
    }
  }
  
  // Apply translation
  function applyTranslation() {
    // Update language attribute
    document.documentElement.setAttribute('lang', currentLang === 'zh' ? 'zh-CN' : 'en');
    
    // Special handling for hero body text
    if (currentLang === 'zh') {
      const heroBody = document.querySelector('.hero-body');
      if (heroBody) {
        const originalContent = heroBody.innerHTML;
        if (!originalTexts.has('hero-body')) {
          originalTexts.set('hero-body', originalContent);
        }
        heroBody.innerHTML = '欢迎来到 <b data-astro-cid-nlow4r3u>JinyuStudio</b>。生于折腾，归于自留。<br><br>这是我在喧嚣世间圈出的一方自留地，私唤作「烟柳巷」。不为附庸风月，只因这浮躁尘世里，太多人隔着有色眼镜打量一切：目光被规训，审美被裹挟，鲜少有人愿意平视一份坦荡的真实。于是我将那些在日光下无处栖身的、未经修饰的不合时宜，尽数安放于此。<br><br>烟是隔绝窥探的迷雾，柳是守护私密的帘幕。此巷非通衢大道，不求取悦众生，只为安顿自己，亦待同频之人。<br><br>若你恰好路过且心生欢喜，便是缘分；若觉刺眼不适，请悄然离去，不必置喙。';
      }
    } else {
      const heroBody = document.querySelector('.hero-body');
      const original = originalTexts.get('hero-body');
      if (heroBody && original) {
        heroBody.innerHTML = original;
      }
    }
    
    // Process body content
    if (document.body) {
      processNode(document.body);
      
      // Special handling for navigation links with menu-text-1 and menu-text-2 structure
      if (currentLang === 'zh') {
        // First handle links with menu-text-1 and menu-text-2
        const menuTextLinks = document.querySelectorAll('.menu-text-1, .menu-text-2');
        menuTextLinks.forEach((span) => {
          const original = originalTexts.get(span);
          if (!original) {
            originalTexts.set(span, span.textContent);
          }
          const translated = translateText(span.textContent);
          if (translated !== span.textContent) {
            span.textContent = translated;
          }
        });
        
        // Then handle other links
        const navSelectors = [
          'nav a',
          '[aria-label="Main navigation"] a',
          'header a'
        ];
        
        navSelectors.forEach((selector) => {
          try {
            document.querySelectorAll(selector).forEach((link) => {
              // Skip links that have menu-text-1 or menu-text-2 (already handled)
              if (link.querySelector('.menu-text-1') || link.querySelector('.menu-text-2')) {
                return;
              }
              
              // Skip links that have child elements
              if (link.childNodes.length > 1 || (link.firstChild && link.firstChild.nodeType === Node.ELEMENT_NODE)) {
                return;
              }
              
              // Check various text sources
              const sources = [
                () => link.textContent,
                () => link.innerText,
                () => link.getAttribute('aria-label'),
                () => link.getAttribute('title')
              ];
              
              sources.forEach((getSource) => {
                const text = getSource();
                if (text && text.trim()) {
                  const translated = translateText(text);
                  if (translated !== text) {
                    // Try to replace text content
                    if (link.textContent === text && link.childNodes.length === 1 && link.childNodes[0].nodeType === Node.TEXT_NODE) {
                      link.textContent = translated;
                    } else if (link.innerText === text && link.childNodes.length === 1 && link.childNodes[0].nodeType === Node.TEXT_NODE) {
                      link.innerText = translated;
                    }
                    // Also update attributes if they match
                    if (link.getAttribute('aria-label') === text) {
                      link.setAttribute('aria-label', translated);
                    }
                    if (link.getAttribute('title') === text) {
                      link.setAttribute('title', translated);
                    }
                  }
                }
              });
            });
          } catch (e) {
            // Ignore errors
          }
        });
        
        // Also try a direct approach for any element with "WORK", "SERVICES", etc.
        const searchTerms = ['WORK', 'SERVICES', 'ABOUT', 'CONTACT', 'ARTICLES', 'LAB'];
        searchTerms.forEach((term) => {
          // Use a more aggressive approach to find and replace text
          const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_ELEMENT,
            null,
            false
          );
          
          while (walker.nextNode()) {
            const el = walker.currentNode;
            if (el.nodeType === Node.ELEMENT_NODE && !shouldSkipElement(el)) {
              // Check if any direct child text nodes contain the term
              if (el.textContent && el.textContent.includes(term)) {
                const translated = translateText(term);
                if (translated !== term) {
                  // Replace all occurrences in the text content
                  const newText = el.textContent.replace(new RegExp(term, 'g'), translated);
                  if (newText !== el.textContent && el.childNodes.length === 0) {
                    el.textContent = newText;
                  }
                }
              }
            }
          }
        });
      }
    }
    
    // Update toggle button
    updateToggleButton();
  }
  
  // Create language toggle button
  function createToggleButton() {
    if (document.getElementById('jinyu-lang-toggle')) return;
    
    // Button container
    const container = document.createElement('div');
    container.id = 'jinyu-lang-toggle';
    container.innerHTML = `
      <button type="button" aria-label="切换语言 / Switch language">
        <span class="jinyu-lang-text"></span>
      </button>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      #jinyu-lang-toggle {
        position: fixed;
        bottom: 80px;
        right: 24px;
        z-index: 99999990;
      }
      #jinyu-lang-toggle button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        cursor: pointer;
        font-family: inherit;
        border: 1px solid rgba(255, 255, 255, 0.15);
        transition: all 0.3s ease;
      }
      #jinyu-lang-toggle button:hover {
        background: rgba(0, 0, 0, 0.9);
        transform: scale(1.1);
      }
      .jinyu-lang-text {
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        letter-spacing: 0.5px;
      }
      @media (max-width: 768px) {
        #jinyu-lang-toggle {
          bottom: 70px;
          right: 16px;
        }
        #jinyu-lang-toggle button {
          width: 40px;
          height: 40px;
        }
        .jinyu-lang-text {
          font-size: 12px;
        }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(container);
    
    // Add click listener
    const button = container.querySelector('button');
    button.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'zh' : 'en');
    });
    
    updateToggleButton();
  }
  
  function updateToggleButton() {
    const container = document.getElementById('jinyu-lang-toggle');
    if (!container) return;
    
    const text = container.querySelector('.jinyu-lang-text');
    text.textContent = currentLang === 'en' ? '中' : 'EN';
  }
  
  // Set language
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'zh') return;
    
    currentLang = lang;
    localStorage.setItem('jinyu-lang', lang);
    
    // Use page reload for consistency to avoid complex DOM manipulation issues
    // This is the most reliable method given the complexity of the site
    location.reload();
  }
  
  // Initialize
  function init() {
    console.log("Jinyu I18n: Initializing");
    console.log("Jinyu I18n: Current lang:", currentLang);
    createToggleButton();
    
    if (currentLang === 'zh') {
      // Apply initial translation
      const apply = () => {
        applyTranslation();
        // Also set up a MutationObserver to handle dynamically added content
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                processNode(node);
              }
            });
          });
        });
        observer.observe(document.body, { childList: true, subtree: true });
      };
      
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(apply, 500);
        });
      } else {
        setTimeout(apply, 500);
      }
    }
  }
  
  // Expose API
  window.JinyuI18n = {
    setLanguage,
    getLanguage: () => currentLang,
    applyTranslation
  };
  
  init();
})();
