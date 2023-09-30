use recipes_project;
db.dropDatabase();

db.recipes.insertMany([

    {
        meal: {
          name: "Classic Spaghetti Bolognese",
          description: "A timeless Italian pasta dish with a rich and hearty meat sauce.",
          image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg?resize=500,500",
          ingredients: [
            "200g ground beef",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 can (14 oz) crushed tomatoes",
            "1/2 cup red wine",
            "1 tablespoon olive oil",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste",
            "250g spaghetti",
            "Grated Parmesan cheese for garnish"
          ],
          nutrition: {
            calories: 450,
            protein: 20,
            carbohydrates: 40,
            fiber: 4,
            sugar: 6,
            fat: 22
          },
          preparation_time: 15,
          cooking_time: 45,
          method: [
            "In a large skillet, heat olive oil and brown the ground beef.",
            "Add chopped onion and garlic, sauté until fragrant.",
            "Stir in crushed tomatoes, red wine, and dried oregano. Simmer for 30 minutes, stirring occasionally.",
            "Season with salt and pepper to taste.",
            "Boil spaghetti until al dente, drain, and serve with the meat sauce.",
            "Garnish with grated Parmesan cheese.",
            "Enjoy your classic Spaghetti Bolognese!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Italy"
        },
        shopping_list: {
          items: [
            "200g ground beef",
            "1 onion",
            "2 cloves garlic",
            "1 can (14 oz) crushed tomatoes",
            "1/2 cup red wine",
            "1 tablespoon olive oil",
            "1 teaspoon dried oregano",
            "Salt",
            "Pepper",
            "250g spaghetti",
            "Grated Parmesan cheese"
          ]
        }
      },

      {
        recipe: {
          name: "Vegetable Stir-Fry",
          description: "A quick and healthy stir-fry packed with colorful vegetables and tofu.",
          image: "https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-how-to-stir-fry-vegetables-vegetable-stir-fry-recipe-list-15-500x500.jpg",
          ingredients: [
            "1 block (14 oz) tofu, cubed",
            "1 red bell pepper, sliced",
            "1 yellow bell pepper, sliced",
            "1 broccoli head, florets separated",
            "1 carrot, sliced",
            "2 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 tablespoon cornstarch",
            "Cooking oil for stir-frying",
            "Cooked rice for serving"
          ],
          nutrition: {
            calories: 350,
            protein: 15,
            carbohydrates: 40,
            fiber: 8,
            sugar: 6,
            fat: 15
          },
          preparation_time: 20,
          cooking_time: 15,
          method: [
            "In a bowl, mix soy sauce, sesame oil, and cornstarch to create a sauce.",
            "In a wok or large pan, heat cooking oil and stir-fry tofu until golden brown. Remove from the pan.",
            "Stir-fry garlic and vegetables until tender-crisp.",
            "Return tofu to the pan, add the sauce, and stir-fry for a few minutes.",
            "Serve over cooked rice.",
            "Enjoy your vegetable stir-fry!"
          ],
          vegan: true,
          vegetarian: true,
          country_of_origin: "China"
        },
        shopping_list: {
          items: [
            "1 block (14 oz) tofu",
            "1 red bell pepper",
            "1 yellow bell pepper",
            "1 broccoli head",
            "1 carrot",
            "2 cloves garlic",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 tablespoon cornstarch",
            "Cooking oil",
            "Cooked rice"
          ]
        }
      }


      

]);