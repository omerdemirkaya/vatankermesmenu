import React from 'react';  // Add this import to resolve the issue

const Menu = () => {

  const menuData = [
    {
      category: "ÖZEL LEZZETLER",
      items: [
        { name: "Vatan Burger", price: "195₺" },
        { name: "Et Tantuni", price: "190₺" },
        { name: "Tavuk Tantuni", price: "170₺" }
      ],
    },
    {
      category: "DÖNER ÜRÜNLERİ",
      items: [
        { name: "Et Döner Ekmek Arası", price: "190₺" },
        { name: "Et Döner Lavaş Dürüm", price: "190₺" },
        { name: "Et Döner Servis", price: "220₺" },
        { name: "Tavuk Döner Ekmek Arası", price: "150₺" },
        { name: "Tavuk Döner Lavaş Dürüm", price: "150₺" },
        { name: "Tavuk Döner Servis", price: "175₺" },
        { name: "Hatay Usulü Tavuk Dürüm", price: "180₺" },
        { name: "Et İskender (Yeni Sunumuyla)", price: "250₺" },
        { name: "Tavuk İskender (Yeni Sunumuyla)", price: "210₺" },
        { name: "Et Döner (kg)", price: "1750₺" },
        { name: "Tavuk Döner (kg)", price: "1350₺" },
      ],
    },
    {
      category: "PİDE VE IZGARA ÇEŞİTLERİ",
      items: [
        { name: "Lahmacun", price: "90₺" },
        { name: "Kıymalı Pide", price: "160₺" },
        { name: "Kapalı Et Dönerli Pide", price: "230₺" },
        { name: "Karışık-Kuşbaşılı Pide", price: "230₺" },
        { name: "Orta Boy Pizza", price: "140₺" },
        { name: "Köfte (Ekmek Arası)", price: "150₺" },
        { name: "Köfte Servis", price: "180₺" },
        { name: "Adana Dürüm", price: "195₺" },
        { name: "Adana Servis", price: "210₺" },
        { name: "Pirzola (4 Adet)", price: "230₺" },
        { name: "Kuzu Şiş Dürüm", price: "210₺" },
        { name: "Kuzu Şiş Servis", price: "230₺" },
        { name: "Tavuk Şiş Dürüm", price: "180₺" },
        { name: "Tavuk Şiş Servis", price: "195₺" },
        { name: "Ciğer Şiş Dürüm", price: "180₺" },
        { name: "Ciğer Şiş Servis", price: "200₺" },
      ],
    },
    {
      category: "ARA SICAK-SOĞUKLAR",
      items: [
        { name: "Çiğ Köfte (kg)", price: "250₺" },
        { name: "Çiğ Köfte (Porsiyon)", price: "75₺" },
        { name: "Çiğ Köfte (Dürüm)", price: "75₺" },
        { name: "Mantı (kg)", price: "350₺" },
        { name: "Mantı (Porsiyon)", price: "70₺" },
        { name: "İçli Köfte (adet)", price: "50₺" },
        { name: "Yaprak Sarma(kg)", price: "240₺" },
        { name: "Yaprak Sarma (Porsiyon)", price: "60₺" },
        { name: "Bazlama", price: "20₺" },
      ],
    },
    {
      category: "TATLILAR",
      items: [
        { name: "Baklava (kg)", price: "400₺" },
        { name: "Baklava (Porsiyon)", price: "100₺" },
        { name: "Künefe (Yeni Lezzet)", price: "90₺" },
        { name: "Waffle", price: "85₺" },
        { name: "Höşmerim", price: "60₺" },
        { name: "Aşure", price: "50₺" },
        { name: "Kabak Tatlısı", price: "60₺" },
        { name: "Sütlaç", price: "60₺" }
      ],
    },
    {
      category: "ÇORBALAR",
      items: [{ name: "Gerdan Çorbası", price: "90₺" }],
    },
    {
      category: "İÇECEKLER",
      items: [
        { name: "Su", price: "5₺" },
        { name: "Sade Soda", price: "15₺" },
        { name: "Kapalı Ayran", price: "15₺" },
        { name: "Yayık Ayran", price: "30₺" },
        { name: "Niğde Gazozu", price: "30₺" },
        { name: "Şalgam", price: "30₺" },
        { name: "Termos Çay", price: "80₺" },
        { name: "Bardak Çay", price: "İkram" },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-8">
          Vatan Kermes Menüsü
        </h1>
        {menuData.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-center text-yellow-400 border-b-4 border-yellow-500 pb-2 mb-6">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 p-6 shadow-lg border-b-2 border-t-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-medium text-gray-300">{item.name}</span>
                    <span className="text-xl font-semibold text-yellow-400">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu
