const copy = {
  zh: {
    "nav.photo": "极简时间水印",
    "nav.xcc": "Xcode Cache Cleaner",
    "hero.eyebrow": "持续生长的个人产品集合",
    "hero.title": "Yicheng Products",
    "hero.lead": "面向生活记录、开发效率与日常工作流的个人产品集合。每个项目都保持简洁、可靠，并尊重用户隐私。",
    "hero.primary": "查看产品",
    "hero.secondary": "访问 GitHub",
    "photo.eyebrow": "iPhone 与 iPad",
    "photo.title": "极简时间水印",
    "photo.lead": "极简离线的照片时间水印工具。为照片一键添加真实拍摄时间、EXIF 参数水印和截图手机边框，支持实况照片与所见即所得编辑。",
    "photo.cta": "在 App Store 查看",
    "photo.meta": "免费 · App 内购买 · iOS 17+",
    "photo.f1.title": "照片时间水印",
    "photo.f1.body": "读取照片真实拍摄时间，添加复古时间戳，适合旅行、家庭记录和日常影像整理。",
    "photo.f2.title": "EXIF 参数水印",
    "photo.f2.body": "把机型、镜头、焦段、快门等拍摄参数转化为干净的照片签名。",
    "photo.f3.title": "截图手机边框",
    "photo.f3.body": "为截图添加设备边框，也支持实况照片、批量处理、小组件和照片扩展。",
    "xcc.preview.sub": "可清理 9.1 GB",
    "xcc.eyebrow": "开源 macOS 工具",
    "xcc.title": "Xcode Cache Cleaner",
    "xcc.lead": "免费的菜单栏工具，用于扫描和清理 Xcode、Simulator、SwiftPM、归档和真机调试缓存。为经常构建 Apple 平台应用的开发者节省磁盘空间。",
    "xcc.download": "下载最新版",
    "xcc.github": "查看源码",
    "xcc.f1.title": "分类清理",
    "xcc.f1.body": "Xcode 缓存、模拟器日志、DerivedData、DeviceSupport、Archives 等常见目录集中展示。",
    "xcc.f2.title": "选择性删除",
    "xcc.f2.body": "先查看类别和项目列表，再只清理真正需要移除的数据。",
    "xcc.f3.title": "面向日常开发",
    "xcc.f3.body": "常驻菜单栏，快速找回空间，保持开发机器轻盈有序。",
    "principles.eyebrow": "产品原则",
    "principles.title": "为具体场景做小而好的工具。",
    "principles.body": "这些项目来自真实的使用场景：记录照片里的时间，整理开发环境里的缓存，或让某个高频流程少一点摩擦。新的产品会继续加入这个集合。"
  },
  en: {
    "nav.photo": "PhotoDateStamp",
    "nav.xcc": "Xcode Cache Cleaner",
    "hero.eyebrow": "A growing collection of personal products",
    "hero.title": "Yicheng Products",
    "hero.lead": "A personal product collection for photo memories, developer productivity, and everyday workflows. Each project stays simple, reliable, and privacy-minded.",
    "hero.primary": "View products",
    "hero.secondary": "Visit GitHub",
    "photo.eyebrow": "iPhone and iPad",
    "photo.title": "PhotoDateStamp",
    "photo.lead": "A minimalist, fully offline photo watermark tool. Add vintage timestamps, professional EXIF details, and realistic iPhone frames in one tap.",
    "photo.cta": "View on App Store",
    "photo.meta": "Free · iOS 17+ · Chinese and English",
    "photo.f1.title": "Second-level timestamps",
    "photo.f1.body": "Preserve the exact shooting moment for travel, family records, daily notes, and visual journals.",
    "photo.f2.title": "EXIF watermarks",
    "photo.f2.body": "Turn camera, lens, focal length, shutter, and device data into a clean photo signature.",
    "photo.f3.title": "Batch and extensions",
    "photo.f3.body": "Supports Live Photos, batch processing for up to 9 photos, widgets, and the Photos extension.",
    "xcc.preview.sub": "Ready to clean 9.1 GB",
    "xcc.eyebrow": "Open-source macOS utility",
    "xcc.title": "Xcode Cache Cleaner",
    "xcc.lead": "A free menu bar utility for scanning and cleaning Xcode, Simulator, SwiftPM, archive, and device-support caches. Built for Apple platform developers who need disk space back quickly.",
    "xcc.download": "Download latest",
    "xcc.github": "View source",
    "xcc.f1.title": "Grouped cleanup",
    "xcc.f1.body": "Xcode caches, Simulator logs, DerivedData, DeviceSupport, Archives, and other common locations in one focused view.",
    "xcc.f2.title": "Selective removal",
    "xcc.f2.body": "Inspect categories and item lists first, then remove only the data you actually want to clean.",
    "xcc.f3.title": "Daily developer workflow",
    "xcc.f3.body": "Lives in the menu bar, helps recover space quickly, and keeps development machines lighter.",
    "principles.eyebrow": "Product principles",
    "principles.title": "Small tools for specific moments.",
    "principles.body": "These projects start from real use cases: preserving the time inside a photo, clearing development caches, or reducing friction in a frequent workflow. New products will keep joining this collection."
  }
};

const languageButtons = document.querySelectorAll(".language-option");
const initialLanguage = localStorage.getItem("site-language") || (navigator.language.startsWith("zh") ? "zh" : "en");

function setLanguage(language) {
  const selected = copy[language] ? language : "zh";
  document.documentElement.lang = selected === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = copy[selected][key] || "";
  });
  document.querySelectorAll("[data-src-zh][data-src-en]").forEach((image) => {
    image.src = image.dataset[selected === "zh" ? "srcZh" : "srcEn"];
  });
  document.querySelectorAll("[data-href-zh][data-href-en]").forEach((link) => {
    link.href = link.dataset[selected === "zh" ? "hrefZh" : "hrefEn"];
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === selected);
    button.setAttribute("aria-pressed", String(button.dataset.lang === selected));
  });
  localStorage.setItem("site-language", selected);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(initialLanguage);
