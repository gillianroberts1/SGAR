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
        meal: {
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
      },

      {
        meal: {
          name: "Irish Stew",
          description: "A hearty Irish stew with tender lamb, potatoes, carrots, and onions.",
          image: "https://simply-delicious-food.com/wp-content/uploads/2019/02/irish-beef-stew-1-500x500.jpg",
          ingredients: [
            "500g boneless lamb shoulder, cubed",
            "4 large potatoes, peeled and diced",
            "2 carrots, sliced",
            "2 onions, chopped",
            "2 cloves garlic, minced",
            "2 cups beef broth",
            "1 cup Guinness stout",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "2 bay leaves",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
          ],
          nutrition: {
            calories: 450,
            protein: 20,
            carbohydrates: 40,
            fiber: 5,
            sugar: 5,
            fat: 20
          },
          preparation_time: 20,
          cooking_time: 90,
          method: [
            "In a large pot, melt butter and brown lamb cubes.",
            "Add onions and garlic, sauté until softened.",
            "Sprinkle flour and cook for a few minutes to create a roux.",
            "Pour in Guinness stout, beef broth, and add bay leaves. Bring to a simmer.",
            "Add potatoes and carrots, simmer for 60-70 minutes until lamb and vegetables are tender.",
            "Season with salt and pepper, garnish with fresh parsley.",
            "Enjoy your hearty Irish Stew!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Ireland"
        },
        shopping_list: {
          items: [
            "500g boneless lamb shoulder",
            "4 large potatoes",
            "2 carrots",
            "2 onions",
            "2 cloves garlic",
            "2 cups beef broth",
            "1 cup Guinness stout",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "2 bay leaves",
            "Salt",
            "Pepper",
            "Fresh parsley"
          ]
        }
      },

      {
        meal: {
          name: "BBQ Pulled Pork Sandwich",
          description: "A classic American sandwich with tender pulled pork in barbecue sauce on a bun.",
          image: "https://keviniscooking.com/wp-content/uploads/2023/04/Southern-Pulled-Pork-Sandwich-square-500x500.jpg",
          ingredients: [
            "1.5 kg pork shoulder roast",
            "1 cup barbecue sauce",
            "1 onion, thinly sliced",
            "4 hamburger buns",
            "Coleslaw for topping",
            "Pickle slices for garnish",
            "Salt and pepper to taste"
          ],
          nutrition: {
            calories: 500,
            protein: 25,
            carbohydrates: 40,
            fiber: 3,
            sugar: 20,
            fat: 25
          },
          preparation_time: 15,
          cooking_time: 6 * 60, // Slow-cooked for 6 hours
          method: [
            "Season pork shoulder with salt and pepper.",
            "Place in a slow cooker and pour barbecue sauce over it. Add sliced onions.",
            "Cover and cook on low for 6 hours until the pork is tender and can be pulled apart with a fork.",
            "Shred the pork and mix it with the sauce.",
            "Toast hamburger buns and fill with pulled pork.",
            "Top with coleslaw and garnish with pickle slices.",
            "Enjoy your BBQ Pulled Pork Sandwich!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "United States"
        },
        shopping_list: {
          items: [
            "1.5 kg pork shoulder roast",
            "1 cup barbecue sauce",
            "1 onion",
            "4 hamburger buns",
            "Coleslaw",
            "Pickle slices",
            "Salt",
            "Pepper"
          ]
        }
      },

      {
        meal: {
          name: "Fish and Chips",
          description: "A classic British dish featuring crispy battered fish and thick-cut potato fries.",
          image: "https://www.corriecooks.com/wp-content/uploads/2023/04/Fish-And-Chips-2-500x500.jpg",
          ingredients: [
            "2 cod fillets",
            "4 large russet potatoes, cut into fries",
            "1 cup all-purpose flour",
            "1 teaspoon baking powder",
            "1 cup cold sparkling water",
            "Vegetable oil for frying",
            "Salt and malt vinegar for seasoning",
            "Peas or tartar sauce for serving"
          ],
          nutrition: {
            calories: 600,
            protein: 30,
            carbohydrates: 70,
            fiber: 5,
            sugar: 2,
            fat: 25
          },
          preparation_time: 30,
          cooking_time: 20,
          method: [
            "Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).",
            "In a bowl, whisk flour, baking powder, and sparkling water to make a batter.",
            "Dip cod fillets in batter and fry until golden brown and crispy.",
            "In batches, fry potato fries until golden and crispy. Drain on paper towels.",
            "Season fish and fries with salt and malt vinegar.",
            "Serve with peas or tartar sauce. Enjoy Fish and Chips!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "United Kingdom"
        },
        shopping_list: {
          items: [
            "2 cod fillets",
            "4 large russet potatoes",
            "1 cup all-purpose flour",
            "1 teaspoon baking powder",
            "1 cup cold sparkling water",
            "Vegetable oil",
            "Salt",
            "Malt vinegar",
            "Peas or tartar sauce"
          ]
        }
      },

      {
        meal: {
          name: "Pad Thai",
          description: "A classic Thai stir-fried noodle dish with shrimp, tofu, and a tangy tamarind sauce.",
          image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/07/Pad-Thai-square-FS-29-500x500.jpg",
          ingredients: [
            "200g rice noodles",
            "150g shrimp, peeled and deveined",
            "150g firm tofu, cubed",
            "2 eggs, beaten",
            "1/2 cup bean sprouts",
            "2 cloves garlic, minced",
            "2 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon sugar",
            "1/4 cup roasted peanuts, chopped",
            "Lime wedges for garnish",
            "Fresh cilantro for garnish"
          ],
          nutrition: {
            calories: 400,
            protein: 20,
            carbohydrates: 50,
            fiber: 3,
            sugar: 8,
            fat: 15
          },
          preparation_time: 20,
          cooking_time: 15,
          method: [
            "Soak rice noodles in warm water until soft, then drain.",
            "In a wok, heat oil and stir-fry garlic, tofu, and shrimp until cooked.",
            "Push ingredients to one side and scramble eggs in the wok.",
            "Add drained noodles, tamarind paste, fish sauce, and sugar. Stir-fry until well combined.",
            "Add bean sprouts and chopped peanuts, toss for a minute.",
            "Garnish with lime wedges and fresh cilantro.",
            "Enjoy your flavorful Pad Thai!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Thailand"
        },
        shopping_list: {
          items: [
            "200g rice noodles",
            "150g shrimp",
            "150g firm tofu",
            "2 eggs",
            "1/2 cup bean sprouts",
            "2 cloves garlic",
            "2 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon sugar",
            "1/4 cup roasted peanuts",
            "Lime wedges",
            "Fresh cilantro"
          ]
        }
      },

      {
        meal: {
          name: "Greek Salad",
          description: "A refreshing Greek salad with tomatoes, cucumbers, olives, and feta cheese.",
          image: "https://amandascookin.com/wp-content/uploads/2022/05/Greek-Salad-RCSQ-500x500.jpg",
          ingredients: [
            "2 large tomatoes, diced",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1/2 cup Kalamata olives",
            "200g feta cheese, crumbled",
            "2 tablespoons olive oil",
            "1 tablespoon red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste",
            "Fresh oregano leaves for garnish"
          ],
          nutrition: {
            calories: 300,
            protein: 10,
            carbohydrates: 15,
            fiber: 5,
            sugar: 7,
            fat: 20
          },
          preparation_time: 15,
          cooking_time: 0,
          method: [
            "In a large bowl, combine diced tomatoes, sliced cucumber, red onion, and Kalamata olives.",
            "Add crumbled feta cheese and drizzle with olive oil and red wine vinegar.",
            "Sprinkle dried oregano, salt, and pepper. Toss to combine.",
            "Garnish with fresh oregano leaves.",
            "Serve your refreshing Greek Salad!"
          ],
          vegan: false,
          vegetarian: true,
          country_of_origin: "Greece"
        },
        shopping_list: {
          items: [
            "2 large tomatoes",
            "1 cucumber",
            "1/2 red onion",
            "1/2 cup Kalamata olives",
            "200g feta cheese",
            "2 tablespoons olive oil",
            "1 tablespoon red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt",
            "Pepper",
            "Fresh oregano leaves"
          ]
        }
      },

      {
        meal: {
          name: "Kung Pao Chicken",
          description: "A spicy and savory Chinese chicken dish with peanuts and vegetables.",
          image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Kung-Pao-Chicken-square-FS-39-new-500x500.jpg",
          ingredients: [
            "4 boneless chicken thighs, diced",
            "1/2 cup unsalted peanuts",
            "1 bell pepper, diced",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 tablespoon hoisin sauce",
            "1 tablespoon Szechuan peppercorns",
            "1 teaspoon red pepper flakes",
            "1 teaspoon sugar",
            "2 tablespoons vegetable oil",
            "Green onions for garnish",
            "Cooked rice for serving"
          ],
          nutrition: {
            calories: 400,
            protein: 22,
            carbohydrates: 20,
            fiber: 3,
            sugar: 5,
            fat: 28
          },
          preparation_time: 20,
          cooking_time: 15,
          method: [
            "In a wok or skillet, heat vegetable oil and stir-fry chicken until browned.",
            "Remove chicken and stir-fry peanuts, garlic, and Szechuan peppercorns until fragrant.",
            "Add onions and bell pepper, stir-fry for a few minutes.",
            "Return chicken to the pan, add soy sauce, rice vinegar, hoisin sauce, and sugar. Cook until sauce thickens.",
            "Garnish with green onions and serve with cooked rice.",
            "Enjoy your spicy Kung Pao Chicken!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "China"
        },
        shopping_list: {
          items: [
            "4 boneless chicken thighs",
            "1/2 cup unsalted peanuts",
            "1 bell pepper",
            "1 onion",
            "3 cloves garlic",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 tablespoon hoisin sauce",
            "1 tablespoon Szechuan peppercorns",
            "1 teaspoon red pepper flakes",
            "1 teaspoon sugar",
            "2 tablespoons vegetable oil",
            "Green onions",
            "Cooked rice"
          ]
        }
      },

      {
        meal: {
          name: "Chicken Tikka Masala",
          description: "A popular Indian dish with tender chicken in a creamy tomato and spice-infused sauce.",
          image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Chicken-Tikka-Masala-square-FS-51-500x500.jpg",
          ingredients: [
            "4 boneless chicken breasts, cut into chunks",
            "1 cup plain yogurt",
            "2 tablespoons ginger-garlic paste",
            "1/2 cup tomato puree",
            "1/2 cup heavy cream",
            "1 onion, finely chopped",
            "2 teaspoons garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish",
            "Steamed rice for serving"
          ],
          nutrition: {
            calories: 550,
            protein: 30,
            carbohydrates: 20,
            fiber: 3,
            sugar: 5,
            fat: 40
          },
          preparation_time: 30,
          cooking_time: 30,
          method: [
            "Marinate chicken chunks in yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Grill or pan-fry chicken until cooked through.",
            "In a separate pan, sauté onions and add tomato puree and spices. Cook until oil separates.",
            "Stir in heavy cream and cooked chicken. Simmer for 10 minutes.",
            "Garnish with fresh cilantro and serve with steamed rice.",
            "Enjoy your flavorful Chicken Tikka Masala!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "India"
        },
        shopping_list: {
          items: [
            "4 boneless chicken breasts",
            "1 cup plain yogurt",
            "2 tablespoons ginger-garlic paste",
            "1/2 cup tomato puree",
            "1/2 cup heavy cream",
            "1 onion",
            "2 teaspoons garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt",
            "Pepper",
            "Fresh cilantro",
            "Steamed rice"
          ]
        }
      },

      {
        meal: {
          name: "Coq au Vin",
          description: "A classic French chicken stew simmered in red wine with mushrooms and onions.",
          image: "https://familystylefood.com/wp-content/uploads/2021/12/Coq-Au-Vin-hero-macro-500x500.jpg",
          ingredients: [
            "4 chicken thighs",
            "1/2 bottle red wine",
            "200g mushrooms, sliced",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "2 sprigs fresh thyme",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "Salt and pepper to taste",
            "Fresh parsley for garnish",
            "Mashed potatoes for serving"
          ],
          nutrition: {
            calories: 450,
            protein: 25,
            carbohydrates: 10,
            fiber: 2,
            sugar: 3,
            fat: 30
          },
          preparation_time: 20,
          cooking_time: 60,
          method: [
            "Season chicken thighs with salt and pepper.",
            "In a Dutch oven, melt butter and brown chicken on both sides. Remove and set aside.",
            "Sauté onions, garlic, and mushrooms until soft.",
            "Sprinkle flour and stir to create a roux.",
            "Return chicken to the pot, add red wine and thyme. Simmer for 45 minutes.",
            "Garnish with fresh parsley and serve with mashed potatoes.",
            "Enjoy your homemade Coq au Vin!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "France"
        },
        shopping_list: {
          items: [
            "4 chicken thighs",
            "1/2 bottle red wine",
            "200g mushrooms",
            "1 onion",
            "2 cloves garlic",
            "2 sprigs fresh thyme",
            "2 tablespoons butter",
            "2 tablespoons all-purpose flour",
            "Salt",
            "Pepper",
            "Fresh parsley",
            "Mashed potatoes"
          ]
        }
      },

      {
        meal: {
          name: "Tacos al Pastor",
          description: "Delicious Mexican street tacos with marinated pork, pineapple, and cilantro.",
          image: "https://www.seasonsandsuppers.ca/wp-content/uploads/2018/08/tacos-al-pastor-1200-500x500.jpg",
          ingredients: [
            "300g thinly sliced pork shoulder",
            "1/2 cup diced pineapple",
            "1 small onion, finely chopped",
            "2 cloves garlic, minced",
            "2 teaspoons chili powder",
            "1 teaspoon ground cumin",
            "1/2 teaspoon paprika",
            "1/4 cup fresh cilantro leaves",
            "8 small corn tortillas",
            "Lime wedges for garnish"
          ],
          nutrition: {
            calories: 350,
            protein: 18,
            carbohydrates: 35,
            fiber: 4,
            sugar: 7,
            fat: 16
          },
          preparation_time: 15,
          cooking_time: 20,
          method: [
            "In a bowl, mix chili powder, cumin, paprika, and garlic to create a marinade.",
            "Marinate pork slices in the mixture for at least 30 minutes.",
            "Heat a skillet and cook marinated pork until browned and cooked through.",
            "Warm corn tortillas in the skillet.",
            "Assemble tacos with pork, diced pineapple, chopped onion, and cilantro.",
            "Serve with lime wedges. Enjoy Tacos al Pastor!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Mexico"
        },
        shopping_list: {
          items: [
            "300g thinly sliced pork shoulder",
            "1/2 cup diced pineapple",
            "1 small onion",
            "2 cloves garlic",
            "2 teaspoons chili powder",
            "1 teaspoon ground cumin",
            "1/2 teaspoon paprika",
            "1/4 cup fresh cilantro leaves",
            "8 small corn tortillas",
            "Lime wedges"
          ]
        }
      },

      {
        meal: {
          name: "Paella Valenciana",
          description: "A classic Spanish dish with saffron-infused rice, seafood, and vegetables.",
          image: "https://abountifulkitchen.com/wp-content/uploads/2021/07/IMG_9547-500x500.jpg",
          ingredients: [
            "250g bomba rice",
            "300g mixed seafood (shrimp, mussels, calamari)",
            "1 onion, finely chopped",
            "3 cloves garlic, minced",
            "1 red bell pepper, sliced",
            "1/2 cup frozen peas",
            "1 teaspoon saffron threads",
            "2 cups chicken broth",
            "1/4 cup white wine",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Lemon wedges for garnish"
          ],
          nutrition: {
            calories: 500,
            protein: 25,
            carbohydrates: 60,
            fiber: 5,
            sugar: 3,
            fat: 18
          },
          preparation_time: 20,
          cooking_time: 40,
          method: [
            "In a paella pan, heat olive oil and sauté onion, garlic, and bell pepper until soft.",
            "Add bomba rice and saffron threads, stirring for a minute.",
            "Pour in white wine and chicken broth, bring to a simmer.",
            "Add mixed seafood and peas, cook until rice is tender and seafood is cooked through.",
            "Season with salt and pepper, garnish with lemon wedges.",
            "Serve your authentic Paella Valenciana!"
          ],
          vegan: false,
          vegetarian: false,
          country_of_origin: "Spain"
        },
        shopping_list: {
          items: [
            "250g bomba rice",
            "300g mixed seafood",
            "1 onion",
            "3 cloves garlic",
            "1 red bell pepper",
            "1/2 cup frozen peas",
            "1 teaspoon saffron threads",
            "2 cups chicken broth",
            "1/4 cup white wine",
            "2 tablespoons olive oil",
            "Salt",
            "Pepper",
            "Lemon wedges"
          ]
        }
      }
      


      


      
      
      
      
      
      


      
      


      

]);