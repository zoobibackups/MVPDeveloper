const initialState = {
    weeklySchedule:null,
    weeklyScheduletemplate:{
        "data": {
            "Monday": [
                {
                    "id": 349,
                    "day": "Monday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "350",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:06.000Z",
                    "updatedAt": "2023-12-31T07:05:06.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 349,
                        "name": "Lazy Keto Breakfast Bowl",
                        "calories": "350",
                        "photo": "https://vegetariangastronomy.com/wp-content/uploads/2019/01/vegan-low-carb-superfood-breakfast-bowl-2.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "Heat olive oil in a non-stick skillet over medium heat.",
                            "Crack two eggs into the skillet and cook until whites are set.",
                            "Add bell peppers and spinach to the skillet and cook until vegetables are tender.",
                            "Season with salt and pepper to taste.",
                            "Transfer to a bowl and top with avocado slices."
                        ],
                        "groceryList": [
                            "2 large eggs",
                            "1/4 avocado",
                            "1 tablespoon olive oil",
                            "1/4 cup bell peppers",
                            "1/4 cup spinach",
                            "Salt and pepper"
                        ],
                        "nutritions": [
                            "Protein: 14g",
                            "Fats: 27g",
                            "Carbohydrates: 6g",
                            "Calories: 350"
                        ],
                        "createdAt": "2023-12-31T07:05:06.000Z",
                        "updatedAt": "2023-12-31T07:05:06.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 350,
                    "day": "Monday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "400",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:07.000Z",
                    "updatedAt": "2023-12-31T07:05:07.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 350,
                        "name": "Italian Fish and Bean Salad",
                        "calories": "400",
                        "photo": "https://www.foodandwine.com/thmb/EhwVcbPf5a7Hr4_v0_zY3xuRRL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201307-xl-tuna-and-white-bean-salad-2000-6afa98794c2649eba3af96c3689fb154.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "In a large bowl",
                            " combine grilled white fish fillet",
                            " Cannellini beans",
                            " red onion",
                            " and cherry tomatoes.",
                            "In a separate small bowl",
                            " whisk together olive oil",
                            " balsamic vinegar",
                            " fresh basil",
                            " salt",
                            " and pepper.",
                            "Pour the dressing over the salad and toss to combine.",
                            "Serve chilled."
                        ],
                        "groceryList": [
                            "4 oz grilled white fish fillet",
                            "1 cup Cannellini beans",
                            "1/4 red onion",
                            "1 cup cherry tomatoes",
                            "1 tablespoon olive oil",
                            "1 tablespoon balsamic vinegar",
                            "1 tablespoon fresh basil",
                            "Salt and pepper"
                        ],
                        "nutritions": [
                            "Protein: 25g",
                            "Fats: 10g",
                            "Carbohydrates: 39g",
                            "Calories: 400"
                        ],
                        "createdAt": "2023-12-31T07:05:07.000Z",
                        "updatedAt": "2023-12-31T07:05:07.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 351,
                    "day": "Monday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "200",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:08.000Z",
                    "updatedAt": "2023-12-31T07:05:08.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 351,
                        "name": "Fish and Chips Lettuce Wraps",
                        "calories": "200",
                        "photo": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2342834336031365",
                        "type": "Snack",
                        "instructions": [
                            "Place baked white fish fillet on a large lettuce leaf.",
                            "Top with cucumber slices and tartar sauce.",
                            "Fold the lettuce leaf to form a wrap.",
                            "Serve."
                        ],
                        "groceryList": [
                            "4 oz baked white fish fillet",
                            "1 large lettuce leaf",
                            "1/4 cup cucumber",
                            "1 tablespoon tartar sauce"
                        ],
                        "nutritions": [
                            "Protein: 30g",
                            "Fats: 8g",
                            "Carbohydrates: 6g",
                            "Calories: 200"
                        ],
                        "createdAt": "2023-12-31T07:05:07.000Z",
                        "updatedAt": "2023-12-31T07:05:07.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 352,
                    "day": "Monday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "450",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:08.000Z",
                    "updatedAt": "2023-12-31T07:05:08.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 352,
                        "name": "Cauliflower Pizza Crust with Fish Topping",
                        "calories": "450",
                        "photo": "https://www.wholesomeyum.com/wp-content/uploads/2018/03/wholesomeyum-Cauliflower-Pizza-Crust-Recipe-31.jpg",
                        "type": "Dinner",
                        "instructions": [
                            "Preheat the oven to 425°F (220°C).",
                            "In a microwave-safe bowl",
                            " steam the grated cauliflower for 5 minutes",
                            " then let it cool and squeeze out any excess moisture.",
                            "In a mixing bowl",
                            " combine the grated cauliflower",
                            " egg",
                            " shredded mozzarella cheese",
                            " and grated Parmesan cheese. Mix well.",
                            "Transfer the cauliflower mixture onto a baking sheet lined with parchment paper. Use your hands to shape it into a pizza crust.",
                            "Bake the cauliflower crust in the preheated oven for 15 minutes or until golden brown.",
                            "Remove the cauliflower crust from the oven and spread tomato sauce evenly on top.",
                            "Top with grilled white fish fillet",
                            " red onion",
                            " bell peppers",
                            " black olives",
                            " and shredded mozzarella cheese.",
                            "Return the pizza to the oven and bake for an additional 10 minutes or until the cheese is melted and bubbly.",
                            "Slice and serve."
                        ],
                        "groceryList": [
                            "1 small cauliflower head",
                            "1 egg",
                            "1/4 cup shredded mozzarella cheese",
                            "1/4 cup grated Parmesan cheese",
                            "1/4 cup tomato sauce",
                            "4 oz grilled white fish fillet",
                            "1/4 cup red onion",
                            "1/4 cup bell peppers",
                            "2 tablespoons black olives",
                            "1/4 cup shredded mozzarella cheese"
                        ],
                        "nutritions": [
                            "Protein: 38g",
                            "Fats: 17g",
                            "Carbohydrates: 21g",
                            "Calories: 450"
                        ],
                        "createdAt": "2023-12-31T07:05:08.000Z",
                        "updatedAt": "2023-12-31T07:05:08.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 369,
                    "day": "Monday",
                    "mealName": "Breakfast",
                    "time": null,
                    "calories": null,
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:02.000Z",
                    "updatedAt": "2023-12-31T07:09:02.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 369,
                        "name": null,
                        "calories": null,
                        "photo": "https://study.com/cimages/videopreview/screenshot-100_99609.jpg",
                        "type": "Breakfast",
                        "instructions": null,
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:09:01.000Z",
                        "updatedAt": "2023-12-31T07:09:01.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 370,
                    "day": "Monday",
                    "mealName": "Lunch",
                    "time": null,
                    "calories": null,
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:02.000Z",
                    "updatedAt": "2023-12-31T07:09:02.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 370,
                        "name": null,
                        "calories": null,
                        "photo": "https://study.com/cimages/videopreview/screenshot-100_99609.jpg",
                        "type": "Lunch",
                        "instructions": null,
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:09:02.000Z",
                        "updatedAt": "2023-12-31T07:09:02.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 371,
                    "day": "Monday",
                    "mealName": "Snack",
                    "time": null,
                    "calories": null,
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:03.000Z",
                    "updatedAt": "2023-12-31T07:09:03.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 371,
                        "name": null,
                        "calories": null,
                        "photo": "https://study.com/cimages/videopreview/screenshot-100_99609.jpg",
                        "type": "Snack",
                        "instructions": null,
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:09:03.000Z",
                        "updatedAt": "2023-12-31T07:09:03.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 372,
                    "day": "Monday",
                    "mealName": "Dinner",
                    "time": null,
                    "calories": null,
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:04.000Z",
                    "updatedAt": "2023-12-31T07:09:04.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 372,
                        "name": null,
                        "calories": null,
                        "photo": "https://study.com/cimages/videopreview/screenshot-100_99609.jpg",
                        "type": "Dinner",
                        "instructions": null,
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:09:03.000Z",
                        "updatedAt": "2023-12-31T07:09:03.000Z",
                        "deletedAt": null
                    }
                }
            ],
            "Tuesday": [
                {
                    "id": 353,
                    "day": "Tuesday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "350",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:54.000Z",
                    "updatedAt": "2023-12-31T07:05:54.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 353,
                        "name": "Baked Salmon with Roasted Vegetables",
                        "calories": "350",
                        "photo": "https://www.eatingwell.com/thmb/7cHxyYJme47gGuplo3Z3fep95FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5544320-04f567e988ce416dadc24ba38716147d.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "Preheat the oven to 400°F.",
                            "Place salmon fillets on a baking sheet and season with salt",
                            " pepper",
                            " and your choice of herbs.",
                            "In a separate pan",
                            " toss mixed vegetables (such as bell peppers",
                            " zucchini",
                            " and broccoli) with olive oil",
                            " garlic",
                            " salt",
                            " and pepper.",
                            "Roast the salmon and vegetables in the oven for 20-25 minutes.",
                            "Serve the baked salmon with the roasted vegetables."
                        ],
                        "groceryList": [
                            "Salmon fillets",
                            "Mixed vegetables (bell peppers",
                            " zucchini",
                            " broccoli)",
                            "Olive oil",
                            "Garlic",
                            "Salt",
                            "Pepper",
                            "Herbs (optional)"
                        ],
                        "nutritions": [
                            "{\"Proteins\":\"30g\"",
                            "\"Fats\":\"15g\"",
                            "\"Carbohydrates\":\"20g\"}"
                        ],
                        "createdAt": "2023-12-31T07:05:53.000Z",
                        "updatedAt": "2023-12-31T07:05:53.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 354,
                    "day": "Tuesday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "250",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:54.000Z",
                    "updatedAt": "2023-12-31T07:05:54.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 354,
                        "name": "Italian Bean Salad",
                        "calories": "250",
                        "photo": "https://www.eatingwell.com/thmb/XCMfau2QShG1gfjw4dDoNesw0SE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5551222-1739aafa94a9481b85e643d4a0312d4f.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "In a large bowl",
                            " combine cooked cannellini beans (1 cup)",
                            " cherry tomatoes (cut in half)",
                            " diced red onions (1/4 cup)",
                            " sliced black olives (1/4 cup)",
                            " and chopped fresh basil (2 tablespoons).",
                            "In a small bowl",
                            " whisk together olive oil (2 tablespoons)",
                            " red wine vinegar (1 tablespoon)",
                            " minced garlic (1 clove)",
                            " salt",
                            " and pepper.",
                            "Pour the dressing over the bean mixture and toss to combine.",
                            "Let the salad marinate in the refrigerator for at least 30 minutes before serving.",
                            "Serve the Italian Bean Salad chilled."
                        ],
                        "groceryList": [
                            "Cannellini beans",
                            "Cherry tomatoes",
                            "Red onions",
                            "Black olives",
                            "Fresh basil",
                            "Olive oil",
                            "Red wine vinegar",
                            "Garlic",
                            "Salt",
                            "Pepper"
                        ],
                        "nutritions": [
                            "{\"Proteins\":\"15g\"",
                            "\"Fats\":\"10g\"",
                            "\"Carbohydrates\":\"30g\"}"
                        ],
                        "createdAt": "2023-12-31T07:05:54.000Z",
                        "updatedAt": "2023-12-31T07:05:54.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 355,
                    "day": "Tuesday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "200",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:55.000Z",
                    "updatedAt": "2023-12-31T07:05:55.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 355,
                        "name": "Greek Yogurt with Berries",
                        "calories": "200",
                        "photo": "https://www.thekitchenmagpie.com/wp-content/uploads/images/2011/04/greekyogurtandberries1.jpg",
                        "type": "Snack",
                        "instructions": [
                            "In a bowl",
                            " combine Greek yogurt (1 cup) with mixed berries (such as strawberries",
                            " blueberries",
                            " and raspberries).",
                            "Optional: drizzle with honey or sprinkle with granola for added sweetness and crunch.",
                            "Enjoy the Greek Yogurt with Berries as a refreshing snack."
                        ],
                        "groceryList": [
                            "Greek yogurt",
                            "Mixed berries (strawberries",
                            " blueberries",
                            " raspberries)",
                            "Honey (optional)",
                            "Granola (optional)"
                        ],
                        "nutritions": [
                            "{\"Proteins\":\"20g\"",
                            "\"Fats\":\"5g\"",
                            "\"Carbohydrates\":\"15g\"}"
                        ],
                        "createdAt": "2023-12-31T07:05:55.000Z",
                        "updatedAt": "2023-12-31T07:05:55.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 356,
                    "day": "Tuesday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "500",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:05:56.000Z",
                    "updatedAt": "2023-12-31T07:05:56.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 356,
                        "name": "Zucchini Noodles with Tomato Sauce",
                        "calories": "500",
                        "photo": "https://chefsavvy.com/wp-content/uploads/zucchini-noodles-in-tomato-sauce.jpg",
                        "type": "Dinner",
                        "instructions": [
                            "Using a spiralizer",
                            " create zucchini noodles from fresh zucchini (2 medium-sized zucchinis).",
                            "In a pan",
                            " heat olive oil (1 tablespoon) and sauté minced garlic (1 clove) until fragrant.",
                            "Add canned diced tomatoes (1 cup)",
                            " tomato paste (2 tablespoons)",
                            " dried basil (1 teaspoon)",
                            " dried oregano (1/2 teaspoon)",
                            " salt",
                            " and pepper.",
                            "Simmer the sauce for 10 minutes.",
                            "Add the zucchini noodles to the pan and cook for 2-3 minutes",
                            " until tender but still crisp.",
                            "Serve the Zucchini Noodles with Tomato Sauce and top with grated Parmesan cheese (optional)."
                        ],
                        "groceryList": [
                            "Zucchini",
                            "Olive oil",
                            "Garlic",
                            "Canned diced tomatoes",
                            "Tomato paste",
                            "Dried basil",
                            "Dried oregano",
                            "Salt",
                            "Pepper",
                            "Grated Parmesan cheese (optional)"
                        ],
                        "nutritions": [
                            "{\"Proteins\":\"30g\"",
                            "\"Fats\":\"30g\"",
                            "\"Carbohydrates\":\"45g\"}"
                        ],
                        "createdAt": "2023-12-31T07:05:56.000Z",
                        "updatedAt": "2023-12-31T07:05:56.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 373,
                    "day": "Tuesday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "380",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:56.000Z",
                    "updatedAt": "2023-12-31T07:09:56.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 373,
                        "name": "Avocado and Smoked Salmon Toast",
                        "calories": "380",
                        "photo": "https://www.seriouseats.com/thmb/4TmxBJdyqSrOM0PHQrb479SeeaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160502-avocado-toast-vicky-wasik-salmon-8-a7a4152ebdf3456a9df61ee9dd1179d6.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "Prepare the Avocado and Smoked Salmon Toast according to the recipe.",
                            "Enjoy with a cup of green tea or black coffee.",
                            "Total calories: 380"
                        ],
                        "groceryList": [
                            "Whole grain bread",
                            "Avocado",
                            "Smoked salmon",
                            "Tomatoes",
                            "Red onions",
                            "Lemon",
                            "Salt",
                            "Pepper"
                        ],
                        "nutritions": [
                            "Proteins: 30g",
                            "Fats: 25g",
                            "Carbohydrates: 35g"
                        ],
                        "createdAt": "2023-12-31T07:09:56.000Z",
                        "updatedAt": "2023-12-31T07:09:56.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 374,
                    "day": "Tuesday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "450",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:57.000Z",
                    "updatedAt": "2023-12-31T07:09:57.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 374,
                        "name": "Caprese Salad with Grilled Chicken",
                        "calories": "450",
                        "photo": "https://healthyfitnessmeals.com/wp-content/uploads/2021/05/Chicken-caprese-salad-5.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "Prepare the Caprese Salad with Grilled Chicken according to the recipe.",
                            "Enjoy with a glass of unsweetened iced tea.",
                            "Total calories: 450"
                        ],
                        "groceryList": [
                            "Mixed greens",
                            "Cherry tomatoes",
                            "Fresh mozzarella cheese",
                            "Balsamic glaze",
                            "Grilled chicken breasts",
                            "Fresh basil leaves",
                            "Salt",
                            "Pepper"
                        ],
                        "nutritions": [
                            "Proteins: 45g",
                            "Fats: 25g",
                            "Carbohydrates: 10g"
                        ],
                        "createdAt": "2023-12-31T07:09:57.000Z",
                        "updatedAt": "2023-12-31T07:09:57.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 375,
                    "day": "Tuesday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "200",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:58.000Z",
                    "updatedAt": "2023-12-31T07:09:58.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 375,
                        "name": "Greek Yogurt with Mixed Berries",
                        "calories": "200",
                        "photo": "https://thefoodiephysician.com/wp-content/uploads/2019/02/Greek-Yogurt-Berry-Parfaits-1.jpg",
                        "type": "Snack",
                        "instructions": [
                            "Prepare the Greek Yogurt with Mixed Berries according to the recipe.",
                            "Total calories: 200"
                        ],
                        "groceryList": [
                            "Plain Greek yogurt",
                            "Mixed berries (strawberries",
                            " blueberries",
                            " raspberries)",
                            "Honey"
                        ],
                        "nutritions": [
                            "Proteins: 20g",
                            "Fats: 0g",
                            "Carbohydrates: 30g"
                        ],
                        "createdAt": "2023-12-31T07:09:58.000Z",
                        "updatedAt": "2023-12-31T07:09:58.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 376,
                    "day": "Tuesday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "400",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:09:59.000Z",
                    "updatedAt": "2023-12-31T07:09:59.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 376,
                        "name": "Zucchini Noodles with Shrimp in Tomato Sauce",
                        "calories": "400",
                        "photo": "https://www.primaverakitchen.com/wp-content/uploads/2014/08/Zucchini-noddles-with-tomato-sauce-and-shrimp-3.jpg",
                        "type": "Dinner",
                        "instructions": [
                            "Prepare the Zucchini Noodles with Shrimp in Tomato Sauce according to the recipe.",
                            "Enjoy with a glass of sparkling water.",
                            "Total calories: 400"
                        ],
                        "groceryList": [
                            "Zucchinis",
                            "Shrimp",
                            "Marinara sauce",
                            "Garlic",
                            "Olive oil",
                            "Fresh basil leaves",
                            "Salt",
                            "Pepper"
                        ],
                        "nutritions": [
                            "Proteins: 37g",
                            "Fats: 18g",
                            "Carbohydrates: 15g"
                        ],
                        "createdAt": "2023-12-31T07:09:59.000Z",
                        "updatedAt": "2023-12-31T07:09:59.000Z",
                        "deletedAt": null
                    }
                }
            ],
            "Wednesday": [
                {
                    "id": 357,
                    "day": "Wednesday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "450",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:39.000Z",
                    "updatedAt": "2023-12-31T07:06:39.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 357,
                        "name": "Lazy Keto Breakfast Bowl",
                        "calories": "450",
                        "photo": "https://vegetariangastronomy.com/wp-content/uploads/2019/01/vegan-low-carb-superfood-breakfast-bowl-2.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "1. In a pan",
                            " cook 2 strips of bacon until crispy. Remove from pan and set aside.",
                            "2. In the same pan",
                            " cook 2 eggs over easy.",
                            "3. Meanwhile",
                            " heat 1 cup of leftover roasted vegetables in the microwave.",
                            "4. In a bowl",
                            " combine the roasted vegetables",
                            " 1/2 avocado (diced)",
                            " and 1 tablespoon of olive oil.",
                            "5. Top with the cooked bacon and eggs. Season with salt and pepper",
                            " if desired.",
                            "6. Enjoy!"
                        ],
                        "groceryList": [
                            "2 strips of bacon",
                            "2 eggs",
                            "1 cup of leftover roasted vegetables",
                            "1/2 avocado",
                            "1 tablespoon of olive oil",
                            "salt and pepper"
                        ],
                        "nutritions": [
                            "Calories: 450",
                            "Protein: 20g",
                            "Fat: 40g",
                            "Carbohydrates: 10g"
                        ],
                        "createdAt": "2023-12-31T07:06:39.000Z",
                        "updatedAt": "2023-12-31T07:06:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 358,
                    "day": "Wednesday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "300",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:40.000Z",
                    "updatedAt": "2023-12-31T07:06:40.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 358,
                        "name": "Italian Tuna Salad",
                        "calories": "300",
                        "photo": "https://www.foodandwine.com/thmb/bTHr7XCEeuEfnsl41TXZdUF8YYc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roman-Style-Tuna-Salad-FT-RECIPE0123-585278a5af6e4327baaeab4e52073351.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "1. In a bowl",
                            " combine 1 can of tuna (drained)",
                            " 1 cup of mixed greens",
                            " 1/4 cup of cherry tomatoes (halved)",
                            " 1/4 cup of cucumber (diced)",
                            " and 1 tablespoon of Italian dressing.",
                            "2. Toss to combine.",
                            "3. Serve and enjoy!"
                        ],
                        "groceryList": [
                            "1 can of tuna",
                            "1 cup of mixed greens",
                            "1/4 cup of cherry tomatoes",
                            "1/4 cup of cucumber",
                            "1 tablespoon of Italian dressing"
                        ],
                        "nutritions": [
                            "Calories: 300",
                            "Protein: 30g",
                            "Fat: 10g",
                            "Carbohydrates: 15g"
                        ],
                        "createdAt": "2023-12-31T07:06:39.000Z",
                        "updatedAt": "2023-12-31T07:06:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 359,
                    "day": "Wednesday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "150",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:41.000Z",
                    "updatedAt": "2023-12-31T07:06:41.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 359,
                        "name": "Bean and Vegetable Dip",
                        "calories": "150",
                        "photo": "https://peasandcrayons.com/wp-content/uploads/2016/08/vegan-white-bean-dip-tomato-basil-recipe-2.jpg",
                        "type": "Snack",
                        "instructions": [
                            "1. In a food processor",
                            " combine 1 can of black beans (drained and rinsed)",
                            " 1/2 cup of roasted red peppers",
                            " 2 cloves of garlic",
                            " 1 tablespoon of olive oil",
                            " and 1/2 teaspoon of cumin.",
                            "2. Process until smooth.",
                            "3. Serve with sliced vegetables (e.g.",
                            " carrots",
                            " bell peppers",
                            " celery).",
                            "4. Enjoy!"
                        ],
                        "groceryList": [
                            "1 can of black beans",
                            "1/2 cup of roasted red peppers",
                            "2 cloves of garlic",
                            "1 tablespoon of olive oil",
                            "1/2 teaspoon of cumin",
                            "sliced vegetables"
                        ],
                        "nutritions": [
                            "Calories: 150",
                            "Protein: 8g",
                            "Fat: 5g",
                            "Carbohydrates: 20g"
                        ],
                        "createdAt": "2023-12-31T07:06:40.000Z",
                        "updatedAt": "2023-12-31T07:06:40.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 360,
                    "day": "Wednesday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "400",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:41.000Z",
                    "updatedAt": "2023-12-31T07:06:41.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 360,
                        "name": "Keto Pizza Casserole",
                        "calories": "400",
                        "photo": "https://drdavinahseats.com/wp-content/uploads/2020/02/Pizza-Casserole-2-e1589240945569.png",
                        "type": "Dinner",
                        "instructions": [
                            "1. Preheat the oven to 375°F (190°C).",
                            "2. In a skillet",
                            " cook 1 pound of ground beef",
                            " 1/2 cup of diced onions",
                            " and 1/2 cup of diced bell peppers until the beef is browned and cooked through.",
                            "3. Drain excess fat from the skillet.",
                            "4. Stir in 1 cup of marinara sauce",
                            " 1 teaspoon of Italian seasoning",
                            " and 1/2 teaspoon of garlic powder.",
                            "5. Transfer the beef mixture to a baking dish. Top with 1 cup of shredded mozzarella cheese and 1/4 cup of sliced black olives.",
                            "6. Bake for 20 minutes",
                            " or until the cheese is melted and bubbly.",
                            "7. Serve and enjoy!"
                        ],
                        "groceryList": [
                            "1 pound of ground beef",
                            "1/2 cup of diced onions",
                            "1/2 cup of diced bell peppers",
                            "1 cup of marinara sauce",
                            "1 teaspoon of Italian seasoning",
                            "1/2 teaspoon of garlic powder",
                            "1 cup of shredded mozzarella cheese",
                            "1/4 cup of sliced black olives"
                        ],
                        "nutritions": [
                            "Calories: 400",
                            "Protein: 30g",
                            "Fat: 20g",
                            "Carbohydrates: 20g"
                        ],
                        "createdAt": "2023-12-31T07:06:41.000Z",
                        "updatedAt": "2023-12-31T07:06:41.000Z",
                        "deletedAt": null
                    }
                }
            ],
            "Thursday": [
                {
                    "id": 361,
                    "day": "Thursday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "XXX",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:07:32.000Z",
                    "updatedAt": "2023-12-31T07:07:32.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 361,
                        "name": "Lazy Keto Fish and Avocado Salad",
                        "calories": "XXX",
                        "photo": "https://www.wholesomeyum.com/wp-content/uploads/2021/11/wholesomeyum-Lazy-Keto-Meals-15-Easy-Lazy-Keto-Recipes-2.jpeg",
                        "type": "Breakfast",
                        "instructions": [
                            "1. Cook your favorite fish (such as salmon or tuna) using a low-fat cooking method like baking or grilling.",
                            "2. Combine the cooked fish with sliced avocado",
                            " mixed greens",
                            " cherry tomatoes",
                            " and cucumber.",
                            "3. Drizzle with a vinaigrette dressing made with olive oil",
                            " lemon juice",
                            " and Dijon mustard.",
                            "4. Sprinkle with a pinch of sea salt and black pepper.",
                            "5. Enjoy your delicious Lazy Keto Fish and Avocado Salad!"
                        ],
                        "groceryList": [
                            "Fish (salmon or tuna)",
                            "Avocado",
                            "Mixed greens",
                            "Cherry tomatoes",
                            "Cucumber",
                            "Olive oil",
                            "Lemon juice",
                            "Dijon mustard",
                            "Sea salt",
                            "Black pepper"
                        ],
                        "nutritions": [
                            "Protein: XXg",
                            "Fat: XXg",
                            "Carbohydrates: XXg",
                            "Calories: XXX"
                        ],
                        "createdAt": "2023-12-31T07:07:31.000Z",
                        "updatedAt": "2023-12-31T07:07:31.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 362,
                    "day": "Thursday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "XXX",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:07:33.000Z",
                    "updatedAt": "2023-12-31T07:07:33.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 362,
                        "name": "Italian-inspired Lazy Keto Zucchini Noodles",
                        "calories": "XXX",
                        "photo": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81IPba5codL._AC_UF894,1000_QL80_.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "1. Spiralize zucchini into noodles using a spiralizer tool.",
                            "2. In a pan",
                            " heat a small amount of olive oil and sauté minced garlic until fragrant.",
                            "3. Add the zucchini noodles and sauté until slightly softened.",
                            "4. Mix in cooked beans (such as cannellini or chickpeas)",
                            " sliced cherry tomatoes",
                            " and fresh basil leaves.",
                            "5. Season with salt",
                            " pepper",
                            " and a sprinkle of grated Parmesan cheese (if desired).",
                            "6. Serve your Italian-inspired Lazy Keto Zucchini Noodles with a side of grilled fish or chicken breast for added protein.",
                            "7. Enjoy your healthy and flavorful lunch!"
                        ],
                        "groceryList": [
                            "Zucchini",
                            "Olive oil",
                            "Garlic",
                            "Beans (cannellini or chickpeas)",
                            "Cherry tomatoes",
                            "Fresh basil leaves",
                            "Salt",
                            "Pepper",
                            "Grated Parmesan cheese (optional)",
                            "Grilled fish or chicken breast (optional)"
                        ],
                        "nutritions": [
                            "Protein: XXg",
                            "Fat: XXg",
                            "Carbohydrates: XXg",
                            "Calories: XXX"
                        ],
                        "createdAt": "2023-12-31T07:07:33.000Z",
                        "updatedAt": "2023-12-31T07:07:33.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 363,
                    "day": "Thursday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "XXX",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:07:34.000Z",
                    "updatedAt": "2023-12-31T07:07:34.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 363,
                        "name": "Lazy Keto Snack Mix",
                        "calories": "XXX",
                        "photo": "https://www.wholesomeyum.com/wp-content/uploads/2021/08/wholesomeyum-What-Is-Lazy-Keto-Food-List-Recipes-1.jpeg",
                        "type": "Snack",
                        "instructions": [
                            "1. In a bowl",
                            " combine a mixture of nuts and seeds such as almonds",
                            " walnuts",
                            " pumpkin seeds",
                            " and sunflower seeds.",
                            "2. Add a sprinkle of your favorite spices like paprika",
                            " garlic powder",
                            " and onion powder for extra flavor.",
                            "3. Toss the nuts and seeds together until well coated in the spice mixture.",
                            "4. Portion the snack mix into small containers or resealable bags for convenient snacking throughout the day.",
                            "5. Enjoy your crunchy and satisfying Lazy Keto Snack Mix!"
                        ],
                        "groceryList": [
                            "Almonds",
                            "Walnuts",
                            "Pumpkin seeds",
                            "Sunflower seeds",
                            "Paprika",
                            "Garlic powder",
                            "Onion powder"
                        ],
                        "nutritions": [
                            "Protein: XXg",
                            "Fat: XXg",
                            "Carbohydrates: XXg",
                            "Calories: XXX"
                        ],
                        "createdAt": "2023-12-31T07:07:34.000Z",
                        "updatedAt": "2023-12-31T07:07:34.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 364,
                    "day": "Thursday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "XXX",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:07:35.000Z",
                    "updatedAt": "2023-12-31T07:07:35.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 364,
                        "name": "Lazy Keto Italian Fish with Cauliflower Rice",
                        "calories": "XXX",
                        "photo": "https://i0.wp.com/wonkywonderful.com/wp-content/uploads/2018/04/mushroom-cauliflower-rice-recipe-1.jpg?ssl=1",
                        "type": "Dinner",
                        "instructions": [
                            "1. Bake or grill your favorite fish fillets with a sprinkle of Italian seasoning.",
                            "2. In a separate pan",
                            " sauté cauliflower rice with minced garlic and diced onions until tender.",
                            "3. Stir in diced tomatoes and a drizzle of olive oil",
                            " and continue cooking until heated through.",
                            "4. Season the cauliflower rice with salt",
                            " pepper",
                            " and additional Italian seasonings to taste.",
                            "5. Serve the Italian fish on a bed of cauliflower rice and garnish with fresh parsley.",
                            "6. Enjoy your flavorful and satisfying Lazy Keto Italian Fish with Cauliflower Rice!"
                        ],
                        "groceryList": [
                            "Fish fillets",
                            "Italian seasoning",
                            "Cauliflower rice",
                            "Garlic",
                            "Onion",
                            "Diced tomatoes",
                            "Olive oil",
                            "Salt",
                            "Pepper",
                            "Fresh parsley"
                        ],
                        "nutritions": [
                            "Protein: XXg",
                            "Fat: XXg",
                            "Carbohydrates: XXg",
                            "Calories: XXX"
                        ],
                        "createdAt": "2023-12-31T07:07:34.000Z",
                        "updatedAt": "2023-12-31T07:07:34.000Z",
                        "deletedAt": null
                    }
                }
            ],
            "Friday": [
                {
                    "id": 365,
                    "day": "Friday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "366",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:08:37.000Z",
                    "updatedAt": "2023-12-31T07:08:37.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 365,
                        "name": "Keto Breakfast Bowl",
                        "calories": "366",
                        "photo": "https://mylifecookbook.com/wp-content/uploads/2022/01/breakfast-bowl-SQ2-720x720.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "[{\"recipe\":\"Keto Breakfast Bowl\"",
                            "\"ingredients\":[\"2 eggs\"",
                            "\"2 slices of bacon\"",
                            "\"1/4 cup shredded cheddar cheese\"",
                            "\"1/4 avocado",
                            " sliced\"",
                            "\"2 tablespoons sour cream\"",
                            "\"1 tablespoon chopped green onion\"",
                            "\"Salt and pepper to taste\"]",
                            "\"instructions\":[\"Cook the bacon until crispy",
                            " then crumble it.\"",
                            "\"In a skillet",
                            " fry the eggs to your desired doneness.\"",
                            "\"In a bowl",
                            " combine the cooked eggs",
                            " crumbled bacon",
                            " shredded cheddar cheese",
                            " avocado slices",
                            " sour cream",
                            " chopped green onion",
                            " salt",
                            " and pepper.\"",
                            "\"Mix well and enjoy!\"]",
                            "\"grocery\":[\"eggs\"",
                            "\"bacon\"",
                            "\"shredded cheddar cheese\"",
                            "\"avocado\"",
                            "\"sour cream\"",
                            "\"green onion\"",
                            "\"salt\"",
                            "\"pepper\"]",
                            "\"nutritions\":[{\"Proteins\":\"19g\"",
                            "\"Fats\":\"30g\"",
                            "\"Carbohydrates\":\"7g\"",
                            "\"Calories\":\"366\"}]}]"
                        ],
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:08:37.000Z",
                        "updatedAt": "2023-12-31T07:08:37.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 366,
                    "day": "Friday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "214",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:08:38.000Z",
                    "updatedAt": "2023-12-31T07:08:38.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 366,
                        "name": "Italian Fish Stew",
                        "calories": "214",
                        "photo": "https://thedefineddish.com/wp-content/uploads/2021/10/Mimi_s-Italian-Fish-Stew-4-scaled.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "[{\"recipe\":\"Italian Fish Stew\"",
                            "\"ingredients\":[\"1 tablespoon olive oil\"",
                            "\"1 onion",
                            " chopped\"",
                            "\"2 cloves garlic",
                            " minced\"",
                            "\"1 can diced tomatoes\"",
                            "\"1/2 cup vegetable broth\"",
                            "\"1/4 cup white wine\"",
                            "\"1/2 teaspoon dried basil\"",
                            "\"1/2 teaspoon dried oregano\"",
                            "\"1/2 teaspoon salt\"",
                            "\"1/4 teaspoon black pepper\"",
                            "\"1 pound white fish fillets\"",
                            "\"1/4 cup chopped fresh parsley\"",
                            "\"Juice of 1 lemon\"]",
                            "\"instructions\":[\"In a large pot",
                            " heat the olive oil over medium heat.\"",
                            "\"Add the onion and garlic and cook until softened",
                            " about 5 minutes.\"",
                            "\"Add the diced tomatoes",
                            " vegetable broth",
                            " white wine",
                            " dried basil",
                            " dried oregano",
                            " salt",
                            " and black pepper. Bring to a simmer and cook for 15 minutes.\"",
                            "\"Add the white fish fillets and cook for an additional 10 minutes",
                            " or until the fish is cooked through and flakes easily with a fork.\"",
                            "\"Stir in the chopped parsley and lemon juice. Serve hot.\"]",
                            "\"grocery\":[\"olive oil\"",
                            "\"onion\"",
                            "\"garlic\"",
                            "\"diced tomatoes\"",
                            "\"vegetable broth\"",
                            "\"white wine\"",
                            "\"dried basil\"",
                            "\"dried oregano\"",
                            "\"salt\"",
                            "\"black pepper\"",
                            "\"white fish fillets\"",
                            "\"fresh parsley\"",
                            "\"lemon\"]",
                            "\"nutritions\":[{\"Proteins\":\"26g\"",
                            "\"Fats\":\"7g\"",
                            "\"Carbohydrates\":\"10g\"",
                            "\"Calories\":\"214\"}]}]"
                        ],
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:08:38.000Z",
                        "updatedAt": "2023-12-31T07:08:38.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 367,
                    "day": "Friday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "323",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:08:39.000Z",
                    "updatedAt": "2023-12-31T07:08:39.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 367,
                        "name": "Crispy Roasted Chickpeas",
                        "calories": "323",
                        "photo": "https://www.gimmesomeoven.com/wp-content/uploads/2022/06/Roasted-Chickpeas-Recipe-5.jpg",
                        "type": "Snack",
                        "instructions": [
                            "[{\"recipe\":\"Crispy Roasted Chickpeas\"",
                            "\"ingredients\":[\"1 can chickpeas",
                            " drained and rinsed\"",
                            "\"2 tablespoons olive oil\"",
                            "\"1 teaspoon paprika\"",
                            "\"1/2 teaspoon garlic powder\"",
                            "\"1/4 teaspoon salt\"",
                            "\"1/4 teaspoon black pepper\"]",
                            "\"instructions\":[\"Preheat the oven to 400°F (200°C).\"",
                            "\"In a bowl",
                            " combine the chickpeas",
                            " olive oil",
                            " paprika",
                            " garlic powder",
                            " salt",
                            " and black pepper. Toss well to coat the chickpeas evenly.\"",
                            "\"Spread the chickpeas in a single layer on a baking sheet.\"",
                            "\"Bake for 25-30 minutes",
                            " or until the chickpeas are golden brown and crispy.\"",
                            "\"Let cool for a few minutes before enjoying.\"]",
                            "\"grocery\":[\"chickpeas\"",
                            "\"olive oil\"",
                            "\"paprika\"",
                            "\"garlic powder\"",
                            "\"salt\"",
                            "\"black pepper\"]",
                            "\"nutritions\":[{\"Proteins\":\"12g\"",
                            "\"Fats\":\"14g\"",
                            "\"Carbohydrates\":\"33g\"",
                            "\"Calories\":\"323\"}]}]"
                        ],
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:08:39.000Z",
                        "updatedAt": "2023-12-31T07:08:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 368,
                    "day": "Friday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "502",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:08:39.000Z",
                    "updatedAt": "2023-12-31T07:08:39.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 368,
                        "name": "Zucchini Noodle Alfredo",
                        "calories": "502",
                        "photo": "https://www.wholesomeyum.com/wp-content/uploads/2016/06/wholesomeyum_zucchini-noodles-alfredo-6.jpg",
                        "type": "Dinner",
                        "instructions": [
                            "[{\"recipe\":\"Zucchini Noodle Alfredo\"",
                            "\"ingredients\":[\"2 medium zucchini\"",
                            "\"2 tablespoons butter\"",
                            "\"2 cloves garlic",
                            " minced\"",
                            "\"1 cup heavy cream\"",
                            "\"1/2 cup grated Parmesan cheese\"",
                            "\"Salt and pepper to taste\"",
                            "\"Fresh parsley for garnish\"]",
                            "\"instructions\":[\"Using a spiralizer",
                            " make zucchini noodles out of the zucchini.\"",
                            "\"In a large skillet",
                            " melt the butter over medium heat. Add the minced garlic and cook until fragrant",
                            " about 1-2 minutes.\"",
                            "\"Add the zucchini noodles to the skillet and sauté for 2-3 minutes",
                            " or until tender.\"",
                            "\"Pour in the heavy cream and add the grated Parmesan cheese. Stir well to combine and let simmer for 2-3 minutes",
                            " or until the sauce has thickened.\"",
                            "\"Season with salt and pepper to taste. Garnish with fresh parsley before serving.\"]",
                            "\"grocery\":[\"zucchini\"",
                            "\"butter\"",
                            "\"garlic\"",
                            "\"heavy cream\"",
                            "\"grated Parmesan cheese\"",
                            "\"salt\"",
                            "\"pepper\"",
                            "\"fresh parsley\"]",
                            "\"nutritions\":[{\"Proteins\":\"35g\"",
                            "\"Fats\":\"34g\"",
                            "\"Carbohydrates\":\"19g\"",
                            "\"Calories\":\"502\"}]}]"
                        ],
                        "groceryList": null,
                        "nutritions": null,
                        "createdAt": "2023-12-31T07:08:39.000Z",
                        "updatedAt": "2023-12-31T07:08:39.000Z",
                        "deletedAt": null
                    }
                }
            ],
            "Saturday": [
                {
                    "id": 357,
                    "day": "Saturday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "450",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:39.000Z",
                    "updatedAt": "2023-12-31T07:06:39.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 357,
                        "name": "Lazy Keto Breakfast Bowl",
                        "calories": "450",
                        "photo": "https://vegetariangastronomy.com/wp-content/uploads/2019/01/vegan-low-carb-superfood-breakfast-bowl-2.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "1. In a pan",
                            " cook 2 strips of bacon until crispy. Remove from pan and set aside.",
                            "2. In the same pan",
                            " cook 2 eggs over easy.",
                            "3. Meanwhile",
                            " heat 1 cup of leftover roasted vegetables in the microwave.",
                            "4. In a bowl",
                            " combine the roasted vegetables",
                            " 1/2 avocado (diced)",
                            " and 1 tablespoon of olive oil.",
                            "5. Top with the cooked bacon and eggs. Season with salt and pepper",
                            " if desired.",
                            "6. Enjoy!"
                        ],
                        "groceryList": [
                            "2 strips of bacon",
                            "2 eggs",
                            "1 cup of leftover roasted vegetables",
                            "1/2 avocado",
                            "1 tablespoon of olive oil",
                            "salt and pepper"
                        ],
                        "nutritions": [
                            "Calories: 450",
                            "Protein: 20g",
                            "Fat: 40g",
                            "Carbohydrates: 10g"
                        ],
                        "createdAt": "2023-12-31T07:06:39.000Z",
                        "updatedAt": "2023-12-31T07:06:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 358,
                    "day": "Saturday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "300",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:40.000Z",
                    "updatedAt": "2023-12-31T07:06:40.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 358,
                        "name": "Italian Tuna Salad",
                        "calories": "300",
                        "photo": "https://www.foodandwine.com/thmb/bTHr7XCEeuEfnsl41TXZdUF8YYc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roman-Style-Tuna-Salad-FT-RECIPE0123-585278a5af6e4327baaeab4e52073351.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "1. In a bowl",
                            " combine 1 can of tuna (drained)",
                            " 1 cup of mixed greens",
                            " 1/4 cup of cherry tomatoes (halved)",
                            " 1/4 cup of cucumber (diced)",
                            " and 1 tablespoon of Italian dressing.",
                            "2. Toss to combine.",
                            "3. Serve and enjoy!"
                        ],
                        "groceryList": [
                            "1 can of tuna",
                            "1 cup of mixed greens",
                            "1/4 cup of cherry tomatoes",
                            "1/4 cup of cucumber",
                            "1 tablespoon of Italian dressing"
                        ],
                        "nutritions": [
                            "Calories: 300",
                            "Protein: 30g",
                            "Fat: 10g",
                            "Carbohydrates: 15g"
                        ],
                        "createdAt": "2023-12-31T07:06:39.000Z",
                        "updatedAt": "2023-12-31T07:06:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 359,
                    "day": "Saturday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "150",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:41.000Z",
                    "updatedAt": "2023-12-31T07:06:41.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 359,
                        "name": "Bean and Vegetable Dip",
                        "calories": "150",
                        "photo": "https://peasandcrayons.com/wp-content/uploads/2016/08/vegan-white-bean-dip-tomato-basil-recipe-2.jpg",
                        "type": "Snack",
                        "instructions": [
                            "1. In a food processor",
                            " combine 1 can of black beans (drained and rinsed)",
                            " 1/2 cup of roasted red peppers",
                            " 2 cloves of garlic",
                            " 1 tablespoon of olive oil",
                            " and 1/2 teaspoon of cumin.",
                            "2. Process until smooth.",
                            "3. Serve with sliced vegetables (e.g.",
                            " carrots",
                            " bell peppers",
                            " celery).",
                            "4. Enjoy!"
                        ],
                        "groceryList": [
                            "1 can of black beans",
                            "1/2 cup of roasted red peppers",
                            "2 cloves of garlic",
                            "1 tablespoon of olive oil",
                            "1/2 teaspoon of cumin",
                            "sliced vegetables"
                        ],
                        "nutritions": [
                            "Calories: 150",
                            "Protein: 8g",
                            "Fat: 5g",
                            "Carbohydrates: 20g"
                        ],
                        "createdAt": "2023-12-31T07:06:40.000Z",
                        "updatedAt": "2023-12-31T07:06:40.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 360,
                    "day": "Saturday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "400",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:41.000Z",
                    "updatedAt": "2023-12-31T07:06:41.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 360,
                        "name": "Keto Pizza Casserole",
                        "calories": "400",
                        "photo": "https://drdavinahseats.com/wp-content/uploads/2020/02/Pizza-Casserole-2-e1589240945569.png",
                        "type": "Dinner",
                        "instructions": [
                            "1. Preheat the oven to 375°F (190°C).",
                            "2. In a skillet",
                            " cook 1 pound of ground beef",
                            " 1/2 cup of diced onions",
                            " and 1/2 cup of diced bell peppers until the beef is browned and cooked through.",
                            "3. Drain excess fat from the skillet.",
                            "4. Stir in 1 cup of marinara sauce",
                            " 1 teaspoon of Italian seasoning",
                            " and 1/2 teaspoon of garlic powder.",
                            "5. Transfer the beef mixture to a baking dish. Top with 1 cup of shredded mozzarella cheese and 1/4 cup of sliced black olives.",
                            "6. Bake for 20 minutes",
                            " or until the cheese is melted and bubbly.",
                            "7. Serve and enjoy!"
                        ],
                        "groceryList": [
                            "1 pound of ground beef",
                            "1/2 cup of diced onions",
                            "1/2 cup of diced bell peppers",
                            "1 cup of marinara sauce",
                            "1 teaspoon of Italian seasoning",
                            "1/2 teaspoon of garlic powder",
                            "1 cup of shredded mozzarella cheese",
                            "1/4 cup of sliced black olives"
                        ],
                        "nutritions": [
                            "Calories: 400",
                            "Protein: 30g",
                            "Fat: 20g",
                            "Carbohydrates: 20g"
                        ],
                        "createdAt": "2023-12-31T07:06:41.000Z",
                        "updatedAt": "2023-12-31T07:06:41.000Z",
                        "deletedAt": null
                    }
                }
            ],
            "Sunday": [
                {
                    "id": 357,
                    "day": "Sunday",
                    "mealName": "Breakfast",
                    "time": "8:00",
                    "calories": "450",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:39.000Z",
                    "updatedAt": "2023-12-31T07:06:39.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 357,
                        "name": "Lazy Keto Breakfast Bowl",
                        "calories": "450",
                        "photo": "https://vegetariangastronomy.com/wp-content/uploads/2019/01/vegan-low-carb-superfood-breakfast-bowl-2.jpg",
                        "type": "Breakfast",
                        "instructions": [
                            "1. In a pan",
                            " cook 2 strips of bacon until crispy. Remove from pan and set aside.",
                            "2. In the same pan",
                            " cook 2 eggs over easy.",
                            "3. Meanwhile",
                            " heat 1 cup of leftover roasted vegetables in the microwave.",
                            "4. In a bowl",
                            " combine the roasted vegetables",
                            " 1/2 avocado (diced)",
                            " and 1 tablespoon of olive oil.",
                            "5. Top with the cooked bacon and eggs. Season with salt and pepper",
                            " if desired.",
                            "6. Enjoy!"
                        ],
                        "groceryList": [
                            "2 strips of bacon",
                            "2 eggs",
                            "1 cup of leftover roasted vegetables",
                            "1/2 avocado",
                            "1 tablespoon of olive oil",
                            "salt and pepper"
                        ],
                        "nutritions": [
                            "Calories: 450",
                            "Protein: 20g",
                            "Fat: 40g",
                            "Carbohydrates: 10g"
                        ],
                        "createdAt": "2023-12-31T07:06:39.000Z",
                        "updatedAt": "2023-12-31T07:06:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 358,
                    "day": "Sunday",
                    "mealName": "Lunch",
                    "time": "12:30",
                    "calories": "300",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:40.000Z",
                    "updatedAt": "2023-12-31T07:06:40.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 358,
                        "name": "Italian Tuna Salad",
                        "calories": "300",
                        "photo": "https://www.foodandwine.com/thmb/bTHr7XCEeuEfnsl41TXZdUF8YYc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roman-Style-Tuna-Salad-FT-RECIPE0123-585278a5af6e4327baaeab4e52073351.jpg",
                        "type": "Lunch",
                        "instructions": [
                            "1. In a bowl",
                            " combine 1 can of tuna (drained)",
                            " 1 cup of mixed greens",
                            " 1/4 cup of cherry tomatoes (halved)",
                            " 1/4 cup of cucumber (diced)",
                            " and 1 tablespoon of Italian dressing.",
                            "2. Toss to combine.",
                            "3. Serve and enjoy!"
                        ],
                        "groceryList": [
                            "1 can of tuna",
                            "1 cup of mixed greens",
                            "1/4 cup of cherry tomatoes",
                            "1/4 cup of cucumber",
                            "1 tablespoon of Italian dressing"
                        ],
                        "nutritions": [
                            "Calories: 300",
                            "Protein: 30g",
                            "Fat: 10g",
                            "Carbohydrates: 15g"
                        ],
                        "createdAt": "2023-12-31T07:06:39.000Z",
                        "updatedAt": "2023-12-31T07:06:39.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 359,
                    "day": "Sunday",
                    "mealName": "Snack",
                    "time": "15:20",
                    "calories": "150",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:41.000Z",
                    "updatedAt": "2023-12-31T07:06:41.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 359,
                        "name": "Bean and Vegetable Dip",
                        "calories": "150",
                        "photo": "https://peasandcrayons.com/wp-content/uploads/2016/08/vegan-white-bean-dip-tomato-basil-recipe-2.jpg",
                        "type": "Snack",
                        "instructions": [
                            "1. In a food processor",
                            " combine 1 can of black beans (drained and rinsed)",
                            " 1/2 cup of roasted red peppers",
                            " 2 cloves of garlic",
                            " 1 tablespoon of olive oil",
                            " and 1/2 teaspoon of cumin.",
                            "2. Process until smooth.",
                            "3. Serve with sliced vegetables (e.g.",
                            " carrots",
                            " bell peppers",
                            " celery).",
                            "4. Enjoy!"
                        ],
                        "groceryList": [
                            "1 can of black beans",
                            "1/2 cup of roasted red peppers",
                            "2 cloves of garlic",
                            "1 tablespoon of olive oil",
                            "1/2 teaspoon of cumin",
                            "sliced vegetables"
                        ],
                        "nutritions": [
                            "Calories: 150",
                            "Protein: 8g",
                            "Fat: 5g",
                            "Carbohydrates: 20g"
                        ],
                        "createdAt": "2023-12-31T07:06:40.000Z",
                        "updatedAt": "2023-12-31T07:06:40.000Z",
                        "deletedAt": null
                    }
                },
                {
                    "id": 360,
                    "day": "Sunday",
                    "mealName": "Dinner",
                    "time": "19:00",
                    "calories": "400",
                    "extraIntake": null,
                    "createdAt": "2023-12-31T07:06:41.000Z",
                    "updatedAt": "2023-12-31T07:06:41.000Z",
                    "deletedAt": null,
                    "recipe": {
                        "id": 360,
                        "name": "Keto Pizza Casserole",
                        "calories": "400",
                        "photo": "https://drdavinahseats.com/wp-content/uploads/2020/02/Pizza-Casserole-2-e1589240945569.png",
                        "type": "Dinner",
                        "instructions": [
                            "1. Preheat the oven to 375°F (190°C).",
                            "2. In a skillet",
                            " cook 1 pound of ground beef",
                            " 1/2 cup of diced onions",
                            " and 1/2 cup of diced bell peppers until the beef is browned and cooked through.",
                            "3. Drain excess fat from the skillet.",
                            "4. Stir in 1 cup of marinara sauce",
                            " 1 teaspoon of Italian seasoning",
                            " and 1/2 teaspoon of garlic powder.",
                            "5. Transfer the beef mixture to a baking dish. Top with 1 cup of shredded mozzarella cheese and 1/4 cup of sliced black olives.",
                            "6. Bake for 20 minutes",
                            " or until the cheese is melted and bubbly.",
                            "7. Serve and enjoy!"
                        ],
                        "groceryList": [
                            "1 pound of ground beef",
                            "1/2 cup of diced onions",
                            "1/2 cup of diced bell peppers",
                            "1 cup of marinara sauce",
                            "1 teaspoon of Italian seasoning",
                            "1/2 teaspoon of garlic powder",
                            "1 cup of shredded mozzarella cheese",
                            "1/4 cup of sliced black olives"
                        ],
                        "nutritions": [
                            "Calories: 400",
                            "Protein: 30g",
                            "Fat: 20g",
                            "Carbohydrates: 20g"
                        ],
                        "createdAt": "2023-12-31T07:06:41.000Z",
                        "updatedAt": "2023-12-31T07:06:41.000Z",
                        "deletedAt": null
                    }
                }
            ]
        },
        "meta": {
            "page": 1,
            "take": 30,
            "itemCount": 112,
            "pageCount": 4,
            "hasPreviousPage": false,
            "hasNextPage": true
        }
    },
}

const chatgptReducers = (state = initialState, action) => {
    switch(action.type){
        case "SET_CHAT_DATA":
            return{
                ...state,
                weeklySchedule:action.payload
            }
        default:
            return state
            
    }
}

export default chatgptReducers
