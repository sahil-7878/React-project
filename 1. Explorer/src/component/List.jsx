import React, { useState } from "react";

const FruitMarket = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allFruits = [
    { id: 1, name: "Apple", emoji: "🍎", price: "$3" },
    { id: 2, name: "Banana", emoji: "🍌", price: "$2" },
    { id: 3, name: "Orange", emoji: "🍊", price: "$4" },
    { id: 4, name: "Grapes", emoji: "🍇", price: "$5" },
    { id: 5, name: "Lemon", emoji: "🍋", price: "$1" },
    { id: 6, name: "Peach", emoji: "🍑", price: "$6" },
  ];

  const visibleFruits = allFruits.filter((fruit) => {
    return fruit.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-3xl mx-auto">
      
      {/* Header & Search Bar */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-slate-800 mb-2">Fruit Market 🍎</h2>
        <p className="text-slate-500 mb-6">Type below to filter the list.</p>
        
        <input 
          type="text" 
          placeholder="Find a fruit (e.g., Apple)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-lg shadow-inner"
        />
      </div>

      {/* The List */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleFruits.map((fruit) => (
          <div key={fruit.id} className="group flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border-2 border-transparent hover:border-blue-100 hover:bg-blue-50 transition-all cursor-default">
             <span className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-200">{fruit.emoji}</span>
             <span className="font-bold text-slate-700 text-lg">{fruit.name}</span>
             <span className="text-sm text-slate-400 font-medium bg-white px-2 py-1 rounded-md mt-2 shadow-sm">{fruit.price}</span>
          </div>
        ))}
      </div>
      
      {/* Empty State Message */}
      {visibleFruits.length === 0 && (
         <div className="text-center py-12">
           <p className="text-4xl mb-2">🤷‍♂️</p>
           <p className="text-slate-400 font-medium">No fruits found matching "{searchTerm}"</p>
         </div>
      )}
    </div>
  );
};

export default FruitMarket;