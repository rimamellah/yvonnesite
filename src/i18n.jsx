// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      translation: {
        Design:"Tasarım",
        DesignP:" Yvonne Fae Toptan firması olarak, moda trendlerini takip ederek, müşterinin kalite, fiyat, hızlı teslimat ve sosyal uygunluk beklentilerine yönelik ürünler tasarlanmaktadır."
       ,Cutting:"Kesim, Dikiş, Yıkama",
       CuttingP:"Müşteri ihtiyacı ve talebi tespit edilerek tasarlanan ürünler,  yüksek kumaş kalitesi, özenli dikim ve yıkama aşamasına alınarak, kalite kontrol ekiplerimize teslim edilmektedir.",
      Quality :"Kalite Kontrol",
      QualityP:"Özenle Hazırlanmış ürünler öncelikle kalite kontrol birimlerimiz tarafından kalite duvarından geçen ürünler seçilerek, ütü-paket aşamasında gönderilir.  ",
      Iron:"Ütü, Paket",
      IronP:"Kalite Kontrol duvarını geçen ürünler özenle ütülenir ve paketleme birimiz tarafından özenle paketlenir ve yeniden kalite kontrol departmanına ürünleri gönderilir.",
    Barcoding:"Kalite Kontrol ve Ürün Barkodlama",
    BarcodingP:"Tezgaha hazır hale getirilmiş ürünler, kalite kontrol ekiplerimiz tarafından yeniden kontrol edilerek, ürün barkodlama tarafına iletilir. Tezgaha sunulmaya hazır hale gelmiş ürünler ikinci kez kalite duvarını geçtikten sonra barkodlanarak tezgahlarda yer almaya hazır hale getirilir.",
    AboutUs:"Hakkımızda",
    AboutUsP:"Yvonne Fae Toptan firması olarak Aep Tekstil Mühendislik Elektrik Limited Şirketinin alt grubu olarak 2020 yılında kadın giyim markası olarak kurulmuştur. Belirli stillere göndermeler yapan, sürdürülebilirliği önemseyen, elegan aynı zamanda rahatlığına önem veren her kadının keyifle kullanacağı ürünler tasarlayan bir markadır. Global ve günümüz modasını takip eden tasarımlar tercih edilir.  Tüm ürünlerimiz %100 yerli üretimdir. Marka tasarımlarımız prensip gereği en üst kalitede kumaş, üst kalitede aksesuar ve özenli dikiş ile hazır hale getirilir. Marka prensibimiz gereği tasarımlarımız sizlere sunulmadan kalite ekiplerimiz tarafından en üst düzeyde incelemeler yapılarak sizlere sunulur. Yvonne Fae Toptan firması, çevreci ve sürdürülebilir bakış açısını ön planda tutmaktadır.",
    ensure :"Müşterinin kalite, fiyat, ürün teslim etme süresi ve sosyal uygunluk durumunu göz önüne alarak tasarladığımız ürünler ile müşteri memnuniyetini sağlamak.",
    take :"Kalite ekiplerimiz tarafından verilen öneriler dışında, değerli iş ortaklarımız tarafından aldığımız geri bildirimleri göz önüne alarak her yeni ürün tasarımında kaliteyi bir adım öteye taşımak",
    reflect :"Firmamız çalışanları verimliliği göz önüne alınarak, şirket içi motivasyonu sağlayarak, değerli iş ortaklarımıza motivasyonu hissettirmek. ",
    Benefit:"Değerli iş ortaklarımız ile faydaya dayalı iş ilişkileri kurmayı, kalite performansımızı arttıracak doğru yorum ve ilgiyi sağlamak.",
    Policy:"Kalite Politikamız",

    vision:"Vizyonumuz:",
    mission:"Misyonumuz:",
    Innovation:"Yaratıcılık ve Yenilikçilik:",
    Reliability:"Kalite ve Güvenilirlik:",
    Efficiency:"Verimlilik:",
visionp:" Küresel gelişmeleri takip ederek, yenilikçi  gelişen bir üretim tarzını benimseyerek, kadın giyim sektöründe en güvenilir, en çok tercih edilen marka olmak.",
missionp:" İlke ve toplum değerlerine bağlı, kaliteli doğaya ve insana duyarlı, müşteri memnuniyetini en üst düzeyde tutan, ülke ekonomisine katkı sağlayan güvenilir bir firma olmak.",
Innovationp:"Yvonne Fae Toptan firması farklı stillere göndermeler yaparak, yeniliklere açıktır. Bu duruma ek olarak, kullanıcının en yüksek verimi alması için Arge sürekliliğine dikkat eder ve inovatif bir bakış açısıyla çalışırız.",
Reliabilityp:"Kurumsal değerlerimize ve ilkelerimize bağlı olarak çalıştığımız tüm paydaşlarımızla ilişkilerimizi karşılıklı güven temelinde sürdürüyoruz. Ürün, hizmet, kalite anlayışımızı uluslarsrası standartlarda tutuyoruz.",
Efficiencyp:"Kaynak ve araştırmalarımızı güncel tutarak, süreçlerimizi iyileştirmeye ve geliştirmeye özen gösteriyoruz",
Career:"Kariyer",
Careerp:"Her zaman ve her yerde sizlerleyiz.İş başvurularınız için bizlere ulaşabilirsiniz.",
working:"Çalışma Saatleri",
for:"Bilgi İçin:",
Monday:"Pazartesi: 07:00-19:00",
Tuesday:" Salı-Cuma: 08:30–19:00",
Saturday:"Cumartesi: 08:30–14:00",
Closed :"Pazar Kapalı",
With :"Doğru ve hızlı kargo güvencesi ile",
Shipping :"Kargo ve Teslimat Politikamız",
As:"Yvonne Fae olarak dünyanın dört bir yanına ürün gönderimi yapıyoruz. İlgili ürünlerin doğru ve hızlı şekilde teslim edilmesi öncelikli politikamızdır.Ürünler, sipariş sırasına göre hazırlanarak kargolanmaktadır",
  vsms:"Vizyon & Misyon", 
      pages: {
    "home": "ANA SAYFA",
    "about": "HAKKIMIZDA",
    "projects": "ÜRÜN GRUPLARI",
    "contact": "İLETİŞİM"
  },
  about:"hakkımızda",
  contact:"iletişim",
production: {
    "item1": {
      "number": "2000 m2",
      "text": "2000 metrekare üretim alanı"
    },
    "item2": {
      "number": "500 bin",
      "text": "Yıllık 500 bin Denim üretimi"
    },
    "item3": {
      "number": "500 bin",
      "text": "Yıllık 500 bin dokuma örme"
    },
    "item4": {
      "number": "48",
      "text": "Ülkeye ihracat yapıyoruz."
    }
  
},
ofis:"Ofis",
fabrika:"Fabrika",
magaza:"Toptan Satış Mağazası",
ile:"İletişim",
arap:"Toptan Satış Arapça : ",
tur:"Toptan Satış Türkçe : ",
ing:"Toptan Satış İngilizce : ",
rus:"Toptan Satış Rusça : ",
fabof:"Fabrika & Ofis : ",
    },
    },
    en: {
      translation: {
        Design:"Design",
        DesignP:"Yvonne Fae Wholesale company follows fashion trends and designs products that meet expectations of quality, price, fast delivery and social suitability.",
        Cutting:" Cutting, Seam, Fabric Dyeing",
        CuttingP:"Products designed by determining customer needs and demands are taken to high fabric quality, careful sewing and washing stages and delivered to our quality control teams.",
      Quality:"Quality Control",
    QualityP:"Carefully prepared products are first selected by our quality control units and sent at the ironing-packaging stage.",
       Iron:" Iron, Package",
      IronP:"Carefully prepared products are first selected by our quality control units and sent at the ironing-packaging stage.",
    Barcoding:"Quality Control and Barcoding",
    BarcodingP:"Products ready for the counter are re-checked by our quality control teams and delivered to the product barcoding side. After the products that are ready to be presented to the counter pass the quality wall for the second time, they are barcoded and made ready to be placed on the counter.",
    AboutUs:"About Us",
    AboutUsP:"Yvonne Fae, which quickly took its place in the Turkish ready-made clothing industry with its establishment in 2020, is a sub-group of AEP Engineering Textile En. Elk. Const. Industry. Trade. Ltd. company Yvonne Fae is a brand that prioritizes sustainability while referring to certain styles in the women's clothing industry, attaches importance to elegance and comfort, and designs products that every woman will enjoy. Products that follow today's global fashion are preferred.  All our products are 100% domestic goods. As a matter of principle, our brand designs are prepared with the highest quality fabric, top quality accessories and careful stitching. Necessary checks are carried out by our quality teams and the products are ready to be presented to you. Yvonne Fae Wholesale company prioritizes its environmental and sustainable perspective.",
ensure :"To ensure customer satisfaction in the products we design, taking into account product quality, price, product delivery time and social compliance status.",
take :"To take quality one step further in every new product design by taking into account the feedback we receive from our valued business partners, in addition to the suggestions given by our quality teams.",
reflect :"To reflect motivation to our valued business partners by providing internal motivation, taking into account the efficiency of our company's employees.",
Benefit:"Benefit-based work distribution with our valued business partners will provide correct comments and attention that will increase our quality performance.",
Policy:"Quality Policy",
vision:"Our vision:",
mission:"Our mission:",
Innovation:"Creativity and Innovation:",
Reliability:"Quality and Reliability:",
Efficiency:"Efficiency:",
visionp:"To be the most reliable and preferred brand in the women's clothing industry by following global developments and adopting an innovative production style.",
missionp:"To be a reliable company that adheres to principles and social values, is sensitive to quality nature and people, keeps customer focus at the highest level, and contributes to the country's economy.",
Innovationp:"Yvonne Fae Wholesale company is open to innovations by making references to different styles. In addition to this, we pay attention to R&D continuity and work with an innovative perspective to ensure that the user gets the highest efficiency.",
Reliabilityp:" We maintain our relationships with all our stakeholders, with whom we work, on the basis of mutual trust, in accordance with our corporate values ​​and principles.We keep our product, service and quality understanding at international standards.",
Efficiencyp:"We distribute and care for our children by keeping our resources and research up to date.",
Career:"Career",
Careerp:"We are here always and everywhere.You can contact us for your job applications.",
working:"working hours",
for:"For Information:",
Monday:"Monday: 07:00-19:00",
Tuesday:"Tuesday - Friday: 08:30–19:00",
Saturday:"Saturday: 08:30–14:00",
Closed :"Closed on Sunday",
With :"With Accurate and Fast Shipping Assurance",
Shipping :"Our Shipping and Delivery Policy",
As:"As Yvonne Fae, we ship products all over the world. Our primary policy is to deliver the relevant products accurately and quickly.The products are prepared and shipped according to the order of the order.",
  vsms:"Vision & Mission", 
pages: {
    "home": "HOME",
    "about": "ABOUT US",
    "projects": "PROJECT GROUPS",
    "contact": "CONTACT"
  },
  about:"about us",
    contact:"contact",
production: {
    "item1": {
      "number": "2000 m2",
      "text": "2000 square meters of production area"
    },
    "item2": {
      "number": "500 thousand",
      "text": "Annual denim production of 500 thousand"
    },
    "item3": {
      "number": "500 thousand",
      "text": "500 thousand woven and knitted items per year"
    },
    "item4": {
      "number": "48",
      "text": "We export to the country"
    }
  
},
ofis:"Office",
fabrika:"Factory",
magaza:"Wholesale Store",
ile:"Communication",
arap:"Wholesale Arabic : ",
tur:"Wholesale Turkish : ",
ing:"Wholesale English : ",
rus:"Wholesale Russian : ",
fabof:"Factory & Office : ",





    }
    },
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
