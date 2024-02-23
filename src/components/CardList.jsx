import Card from "./Card";
import "./CardList.css";

const CardList = (props) => {
  const recipes = props.recipes;
  console.log(recipes);

  return (
    <div className="cardList mb-4 ml-2 mr-2 place-items-center">
      {recipes.map((recipe) => (
        <Card key={recipe.recipe.label} recipe={recipe} />
      ))}
    </div>
  );
};

export default CardList;