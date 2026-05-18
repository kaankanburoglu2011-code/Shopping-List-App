#  Shopping List App

React Native ile geliştirilmiş, kullanıcıların alışveriş listelerini kolayca yönetebileceği bir mobil uygulama.

---

##  Proje Hakkında

Bu uygulama kullanıcıların alışveriş listesi oluşturmasına, ürün ekleyip silmesine ve listelerini yönetmesine olanak tanır.

---

##  Grup Üyeleri ve Görev Dağılımı

| İsim | Rol | Sorumluluk |
|------|-----|------------|
| Oğuz Selim Kara | UI Designer | Görsel tasarım, renk paleti, font seçimi ve layout planlaması |
| Kaan Kanburoğlu | Developer | Component yapısı, state yönetimi, buton işlevleri |
| Muhammed Yiğit Kaplan | Developer | Fonksiyonel kodlar, navigation yapısı, veri yönetimi |

---

##  Kullanılan Kütüphaneler

| Kütüphane | Versiyon | Açıklama |
|-----------|----------|----------|
| React Native | - | Temel uygulama framework'ü |
| Expo | - | Managed Workflow platformu |
| React Navigation | ^6.x | Sayfa yönlendirme (Stack Navigator) |
| @react-navigation/native-stack | ^6.x | Native stack navigation |
| @react-navigation/bottom-tabs | ^6.x | Alt sekme navigasyonu |

---

##  Klasör Yapısı

```
project/
├── src/
│   ├── components/
│   │   ├── CustomButton.js
│   │   └── CustomInput.js
│   └── screens/
│       ├── LoginScreen.js
│       └── ShoppingListScreen.js
├── App.js
├── package.json
└── README.md
```

---

##  Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npx expo start
```

---

##  Özellikler

-  Giriş ekranı
-  Alışveriş listesi oluşturma
-  Ürün ekleme / silme
-  Liste yönetimi
-  useState & useEffect ile state yönetimi
 
