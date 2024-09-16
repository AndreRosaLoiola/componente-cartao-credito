import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css"; // Ainda é necessário o CSS do pacote de cartões

function CardSelection() {
  const [selectedCard, setSelectedCard] = useState<number>(0); // Controla o índice do slide atual
  const cardList = [
    {
      id: 1,
      number: "444*********1111",
      name: "John Doe",
      expiry: "12/23",
      cvc: "123",
    },
    {
      id: 2,
      number: "************4444",
      name: "Jane Smith",
      expiry: "11/24",
      cvc: "456",
    },
    {
      id: 3,
      number: "************0005",
      name: "Alex Johnson",
      expiry: "10/25",
      cvc: "789",
    },
  ];

  // Função para alternar proximos cartões
  const nextSlide = () => {
    setSelectedCard((prevIndex) =>
      prevIndex === cardList.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Função para alternar anteriores cartões
  const prevSlide = () => {
    setSelectedCard((prevIndex) =>
      prevIndex === 0 ? cardList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center p-10 border border-slate-300 rounded-3xl">
        <button
          className=" bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="mx-10  flex  flex-col items-center w-full">
          {cardList.map((card, index) => (
            <div
              key={card.id}
              className={`w-full text-center ${
                selectedCard === index ? "block" : "hidden"
              }`}
            >
              <Cards
                cvc={card.cvc}
                expiry={card.expiry}
                name={card.name}
                number={card.number}
                preview={true}
                placeholders={{ name: "Nome do Titular" }}
                locale={{ valid: "Validade" }}
              />
            </div>
          ))}
          <div className="flex justify-center mt-4">
            {cardList.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 bg-gray-400 rounded-full cursor-pointer ${
                  selectedCard === index ? "bg-black" : ""
                }`}
                onClick={() => setSelectedCard(index)}
              ></span>
            ))}
          </div>
        </div>
        <button
          className="  bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
      {/* Lista dos cartões */}
      <div className="w-full mt-6">
        <h3 className="font-semibold text-lg">Lista de Cartões:</h3>
        <ul>
          {cardList.map((card) => (
            <li key={card.id} className="py-2 border-b border-gray-300">
              <p>Número: {card.number}</p>
              <p>Nome: {card.name}</p>
              <p>Expiração: {card.expiry}</p>
              <button
                type="button"
                className="mt-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                onClick={() => setSelectedCard(cardList.indexOf(card))}
              >
                <span className="sr-only">Selecionar cartão</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardSelection;
