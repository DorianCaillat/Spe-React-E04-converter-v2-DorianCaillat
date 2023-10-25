import { Currency } from '../Currencies/Currencies';

type FooterProps = {
  likesCount: number;
  // Je vais demander à que l'on me passe une fonction pour modifier la valeur de likesCount
  // une fonction en typescript c'est `() => void`
  // `void` === rien
  // `newValue` est michelisable, il n'existe pas en javascript, c'est juste le nom que je lui donne
  setLikesCount: (newValue: number) => void;
  selectedCurrency: Currency | null;
};
function Footer({ likesCount, setLikesCount, selectedCurrency }: FooterProps) {
  // Fonction qui sera exécuter au click sur le bouton Like
  const handleClickLikeBtn = () => {
    // Je modifie la valeur de likesCount en lui rajouter +1
    // Cela va déclencher une mise à jour du composant
    // La fonction App va de nouveau être exécuter
    setLikesCount(likesCount + 1);
  };
  return (
    <footer>
      {/* Pour ajouter des eventListener, il suffit d'ajouter un `onQQCH` sur l'élément en question */}
      {/* Dans notre exemple onClick, je lui passe la fonction a exécuter */}
      <button type="button" onClick={handleClickLikeBtn}>
        Like ❤️ : {likesCount}
      </button>
      {selectedCurrency && ( // Vérifiez si selectedCurrency n'est pas null
        <div>
          <p>Selected Currency: {selectedCurrency.description}</p>
          <p>Exchange Rate: {selectedCurrency.rate}</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
