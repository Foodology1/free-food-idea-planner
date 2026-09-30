/*
  Food Idea Planner — free version food library.
  Each food: slug, name, aliases (other words parents might search), nutrition (3 highlights), ideas.
  Each idea: t = title, tip = one-line tip, l = "e" (Easy win) or "s" (Bigger stretch),
  r = optional recipe search words. When r is set, the card shows a "Find a recipe" link.
*/
window.CATEGORIES = [
  { key: "form", title: "Same food, new form", sub: "Change the shape, temperature, brand, texture, or even make it a drink." },
  { key: "flavor", title: "Same flavor, new food", sub: "A familiar taste in places your child hasn't tried yet." },
  { key: "pair", title: "Pair it up", sub: "Put a favorite next to something new. Eating it is optional." }
];

window.FOODS = [
  {
    slug: "chicken-nuggets", name: "Chicken nuggets", aliases: ["nuggets","nugget","chicken nugget","dino nuggets"],
    nutrition: [{ h: "Protein", p: "Helps build and repair growing muscles." }, { h: "Iron and zinc", p: "Chicken provides minerals that support energy and a healthy immune system." }, { h: "B vitamins", p: "Niacin and B6 help the body turn food into energy." }],
    ideas: {
      form: [
        { t: "A new nugget shape", tip: "Try dinosaurs or stars from the brand your child already eats.", l: "e" },
        { t: "One new-brand nugget", tip: "Add a single nugget from a new brand next to the usual ones.", l: "e" },
        { t: "Popcorn chicken", tip: "Smaller bites with a very similar crunchy coating.", l: "e" },
        { t: "Chicken tenders", tip: "Longer and thicker, with more chicken inside each bite.", l: "s", r: "baked chicken tenders" },
        { t: "Homemade baked nuggets", tip: "Your child can shake the chicken in a bag of crushed crackers.", l: "s", r: "homemade baked chicken nuggets" },
        { t: "Cookie-cutter chicken", tip: "Cut flattened chicken into shapes before breading and baking.", l: "s", r: "chicken nugget shapes cookie cutter" }
      ],
      flavor: [
        { t: "Chicken fries", tip: "The same breading in a fry shape. Great for dipping.", l: "e" },
        { t: "Breaded fish sticks", tip: "Same crunchy coating and dipping routine, new food inside.", l: "s", r: "homemade fish sticks" },
        { t: "Crispy chicken patty", tip: "One big round nugget. Try it without a bun first.", l: "s" },
        { t: "Nugget quesadilla", tip: "Chop a nugget into a cheese quesadilla your child can see.", l: "s", r: "chicken nugget quesadilla" }
      ],
      pair: [
        { t: "A new dip on the side", tip: "Offer ranch, BBQ, or honey mustard in a small cup. Dipping is optional.", l: "e" },
        { t: "Veggie stick neighbor", tip: "Place one cucumber or carrot stick near the nuggets.", l: "e" },
        { t: "Nuggets over plain rice", tip: "Two foods on one plate, keeping them side by side.", l: "s" },
        { t: "Nugget and cheese skewer", tip: "Alternate nugget pieces with cheese cubes on a kid-safe skewer.", l: "s" }
      ]
    }
  },
  {
    slug: "mac-and-cheese", name: "Mac & cheese", aliases: ["mac and cheese","mac n cheese","macaroni","macaroni and cheese","mac"],
    nutrition: [{ h: "Calcium", p: "The cheese supports strong bones and teeth." }, { h: "Protein", p: "From both the cheese and the pasta, for growing muscles." }, { h: "Energy", p: "Pasta provides carbohydrates, the brain's favorite fuel." }],
    ideas: {
      form: [
        { t: "A new pasta shape", tip: "Shells or bowties with the same sauce. Let your child pick the shape at the store.", l: "e" },
        { t: "A different boxed brand", tip: "Similar color and texture with a slightly different taste.", l: "e" },
        { t: "Mac and cheese bites", tip: "Baked in a mini muffin tin for a firmer, handheld bite.", l: "s", r: "mac and cheese bites muffin tin" },
        { t: "Baked with a crispy top", tip: "Adds crunch on top of a soft, familiar base.", l: "s", r: "baked mac and cheese" },
        { t: "Homemade stovetop mac", tip: "Creamier and less orange than boxed.", l: "s", r: "easy stovetop mac and cheese" }
      ],
      flavor: [
        { t: "Grilled cheese", tip: "Melty cheese in a new package. Cut into strips for dipping.", l: "e", r: "grilled cheese" },
        { t: "Cheese quesadilla", tip: "Warm, melty cheese in a soft tortilla.", l: "e", r: "cheese quesadilla" },
        { t: "Pretzels with cheese dip", tip: "The cheesy flavor as a dip with a crunchy food.", l: "e", r: "easy cheese dip" },
        { t: "Cheesy rice", tip: "Same sauce, smaller and softer grains.", l: "s", r: "cheesy rice" }
      ],
      pair: [
        { t: "Peas on the side", tip: "A small spoonful of peas near the bowl, not mixed in.", l: "e" },
        { t: "Next to nuggets", tip: "Serve alongside another favorite for a two-safe-food plate.", l: "e" },
        { t: "Crushed cracker topping", tip: "A light sprinkle of crushed crackers on top.", l: "s" },
        { t: "A few peas stirred in", tip: "Start with just three or four so the bowl still looks familiar.", l: "s" }
      ]
    }
  },
  {
    slug: "plain-pasta", name: "Plain pasta", aliases: ["pasta","noodles","buttered noodles","spaghetti","butter noodles"],
    nutrition: [{ h: "Energy", p: "Carbohydrates are the main fuel for busy bodies and brains." }, { h: "Iron and folate", p: "Most pasta is enriched with iron and B vitamins." }, { h: "Fiber option", p: "Whole-wheat or blended pastas add extra fiber when your child is ready." }],
    ideas: {
      form: [
        { t: "A new shape", tip: "Switch from one shape to another, like penne to rotini.", l: "e" },
        { t: "Long noodles", tip: "Spaghetti or linguine instead of short pasta.", l: "e" },
        { t: "Cold pasta salad", tip: "Chilled pasta with one add-in your child picks.", l: "s", r: "simple pasta salad" },
        { t: "Veggie-tinted pasta", tip: "Spinach or tomato pasta tastes similar but looks different.", l: "s" },
        { t: "Homemade pasta", tip: "Rolling and cutting dough together is hands-on and messy in a good way.", l: "s", r: "easy homemade pasta dough" }
      ],
      flavor: [
        { t: "Butter and parmesan", tip: "A light sprinkle of cheese on the usual butter noodles.", l: "e" },
        { t: "Buttered egg noodles", tip: "Softer, wider noodles with the same simple flavor.", l: "e" },
        { t: "Plain ramen noodles", tip: "Drained, with a little butter. A curly new texture.", l: "e" },
        { t: "Buttered rice", tip: "The same simple flavor in a new grain.", l: "s" }
      ],
      pair: [
        { t: "Sauce on the side", tip: "A small cup of marinara for dipping, if your child wants.", l: "e" },
        { t: "Pea neighbors", tip: "A spoonful of peas on the plate near the pasta.", l: "e" },
        { t: "A meatball on the side", tip: "One small meatball kept separate from the noodles.", l: "s", r: "easy meatballs" },
        { t: "Olive oil drizzle", tip: "A tiny drizzle changes the shine and taste just a bit.", l: "s" }
      ]
    }
  },
  {
    slug: "crackers", name: "Crackers", aliases: ["cracker","goldfish","saltines","ritz"],
    nutrition: [{ h: "Quick energy", p: "Carbohydrates give a fast, easy boost between meals." }, { h: "Iron and B vitamins", p: "Many crackers are made with enriched flour." }, { h: "Fiber option", p: "Whole-grain crackers add fiber for healthy digestion." }],
    ideas: {
      form: [
        { t: "A new shape, same brand", tip: "Many brands make fun shapes with the same taste.", l: "e" },
        { t: "A new brand, similar crunch", tip: "Add one new cracker next to the usual ones.", l: "e" },
        { t: "Mini or big size", tip: "Change only the size and keep everything else the same.", l: "e" },
        { t: "Whole-grain version", tip: "A heartier crunch and a slightly nuttier taste.", l: "s" },
        { t: "Homemade crackers", tip: "Roll, cut, and bake your own. A little less uniform.", l: "s", r: "easy homemade crackers" }
      ],
      flavor: [
        { t: "Pretzels", tip: "Salty and crunchy, with a different shape and bite.", l: "e" },
        { t: "Graham crackers", tip: "Same crunch with a sweeter flavor.", l: "e" },
        { t: "Rice cakes", tip: "Light, airy crunch in a bigger round shape.", l: "s" },
        { t: "Pita chips", tip: "Thicker and harder crunch. Try one at a time.", l: "s", r: "baked pita chips" },
        { t: "Mini cracker pizzas", tip: "A dab of sauce and cheese, warmed for a minute.", l: "s", r: "cracker pizzas" }
      ],
      pair: [
        { t: "Cheese slice neighbor", tip: "A slice or cube of cheese next to the crackers.", l: "e" },
        { t: "Cracker stacks", tip: "Build towers with crackers and cheese slices.", l: "e" },
        { t: "Cracker sandwich", tip: "Two crackers with a slice of cheese or a thin layer of jam in between.", l: "s" },
        { t: "Cream cheese dip", tip: "A small cup of dip on the side. Dipping is optional.", l: "s" },
        { t: "Crumbled into soup", tip: "Crackers on top of a mild soup your child can see.", l: "s" }
      ]
    }
  },
  {
    slug: "french-fries", name: "French fries", aliases: ["fries","french fry","chips","potato fries"],
    nutrition: [{ h: "Potassium", p: "Potatoes naturally contain potassium, which helps muscles and nerves work." }, { h: "Energy", p: "Potatoes are rich in carbohydrates for active kids." }, { h: "A bridge food", p: "Potatoes come in so many forms, which makes fries a great starting point." }],
    ideas: {
      form: [
        { t: "A new cut", tip: "Crinkle, waffle, or shoestring fries.", l: "e" },
        { t: "Fries from a new place", tip: "Same food, slightly different color and crispness.", l: "e" },
        { t: "A sprinkle of seasoning", tip: "Your child shakes on salt or a mild seasoning.", l: "e" },
        { t: "Homemade oven fries", tip: "Less uniform and softer inside than frozen fries.", l: "s", r: "homemade oven baked fries" },
        { t: "Potato wedges", tip: "Thicker, with skin on and a fluffier middle.", l: "s", r: "baked potato wedges" }
      ],
      flavor: [
        { t: "Tater tots", tip: "Crispy outside, same potato inside, in a bite-size shape.", l: "e" },
        { t: "Hash browns", tip: "Crispy shredded potato in a flat patty.", l: "s", r: "crispy hash browns" },
        { t: "Roasted potato cubes", tip: "Same potato flavor with a softer bite.", l: "s", r: "roasted potatoes" },
        { t: "Sweet potato fries", tip: "Same shape, sweeter taste and new color.", l: "s", r: "baked sweet potato fries" },
        { t: "Mashed potato puffs", tip: "Scoops of mashed potato baked until golden.", l: "s", r: "mashed potato puffs" }
      ],
      pair: [
        { t: "A new dip on the side", tip: "Try ranch, BBQ, or cheese sauce in a small cup.", l: "e" },
        { t: "Fries with a new neighbor", tip: "Serve alongside a small piece of a new food.", l: "e" },
        { t: "Cheese fries", tip: "A little melted cheese on part of the pile, not all of it.", l: "s" }
      ]
    }
  },
  {
    slug: "pizza", name: "Pizza", aliases: ["cheese pizza","pizza slice"],
    nutrition: [{ h: "Calcium and protein", p: "The cheese supports strong bones and growing muscles." }, { h: "Lycopene", p: "Cooked tomato sauce contains this antioxidant." }, { h: "A food with many parts", p: "Crust, sauce, and cheese give lots of ways to explore new foods." }],
    ideas: {
      form: [
        { t: "Mini pizzas", tip: "Smaller rounds with the same cheese and sauce.", l: "e", r: "mini pizzas" },
        { t: "Square slices", tip: "Cut the usual pizza into squares or strips.", l: "e" },
        { t: "English muffin pizzas", tip: "Your child spreads sauce and sprinkles cheese.", l: "e", r: "english muffin pizzas" },
        { t: "Pizza from a new place", tip: "Same idea, slightly different crust and sauce.", l: "s" },
        { t: "Pizza bagel", tip: "Chewier base with familiar toppings.", l: "s", r: "pizza bagels" },
        { t: "Homemade pizza night", tip: "Store-bought dough and a few topping choices.", l: "s", r: "easy homemade pizza" }
      ],
      flavor: [
        { t: "Cheese breadsticks", tip: "The pizza flavor in a dunkable stick.", l: "e", r: "cheesy breadsticks" },
        { t: "Garlic bread", tip: "Warm, buttery bread similar to pizza crust.", l: "e", r: "garlic bread" },
        { t: "Pizza quesadilla", tip: "Sauce and cheese in a tortilla instead of crust.", l: "s", r: "pizza quesadilla" },
        { t: "Pizza pasta", tip: "Pasta with pizza sauce and melted mozzarella.", l: "s", r: "pizza pasta bake" }
      ],
      pair: [
        { t: "Crust dipped in sauce", tip: "A small cup of marinara for the crust.", l: "e" },
        { t: "One topping on the side", tip: "Put one pepperoni next to the slice, not on it.", l: "e" },
        { t: "Cucumber slice neighbors", tip: "A few cucumber coins near the pizza.", l: "e" },
        { t: "One topping on one bite", tip: "Add a topping to just a corner of the slice.", l: "s" }
      ]
    }
  },
  {
    slug: "apples", name: "Apples", aliases: ["apple","apple slices"],
    nutrition: [{ h: "Fiber", p: "Especially in the peel. Supports healthy digestion and steady energy." }, { h: "Antioxidants", p: "Apples contain polyphenols like quercetin, found mostly in and near the peel." }, { h: "Vitamin C and water", p: "Vitamin C supports the immune system, and apples are mostly water, which helps with hydration." }],
    ideas: {
      form: [
        { t: "Thin slices", tip: "Very thin slices feel different from thick wedges. An apple slicer makes it fun.", l: "e" },
        { t: "A new apple variety", tip: "Try one slice of a new kind next to the usual.", l: "e" },
        { t: "Apple juice", tip: "The same apple taste with no chewing at all.", l: "e" },
        { t: "Peeled or unpeeled", tip: "Switch whichever way your child usually eats them.", l: "s" },
        { t: "Warm apple cider", tip: "A cozy drink with a stronger, spiced apple flavor.", l: "s" },
        { t: "Apple chips", tip: "Dried and crunchy, with a stronger flavor.", l: "s", r: "baked apple chips" },
        { t: "Baked cinnamon apples", tip: "Soft, warm slices.", l: "s", r: "baked cinnamon apples" },
        { t: "Applesauce", tip: "Smooth instead of crunchy. A big texture change.", l: "s", r: "homemade applesauce" }
      ],
      flavor: [
        { t: "Applesauce pouch", tip: "Squeezable and predictable every single time.", l: "e" },
        { t: "Apple cider donuts", tip: "A sweet, cakey treat with apple flavor.", l: "s", r: "baked apple cider donuts" },
        { t: "Apple cider slushie", tip: "Freeze cider into a slushy drink for a cold twist.", l: "s", r: "apple cider slushie" },
        { t: "Apple cinnamon oatmeal", tip: "Apple flavor in a warm, soft food.", l: "s", r: "apple cinnamon oatmeal" },
        { t: "Apple muffins", tip: "Baked apple pieces are soft and warm.", l: "s", r: "apple muffins" }
      ],
      pair: [
        { t: "Yogurt or caramel dip", tip: "A small cup of dip on the side. Dipping is optional.", l: "e" },
        { t: "Apple and cheese", tip: "A slice of cheese next to the apple slices.", l: "e" },
        { t: "Pear slice neighbor", tip: "One pear slice with the apples. It looks and feels similar.", l: "e" },
        { t: "Apple donuts", tip: "Apple rings your child tops with a spread and sprinkles.", l: "e", r: "apple donuts apple rings" },
        { t: "Apple on toast", tip: "Thin slices on toast with a sprinkle of cinnamon.", l: "s" }
      ]
    }
  },
  {
    slug: "bananas", name: "Bananas", aliases: ["banana"],
    nutrition: [{ h: "Potassium", p: "Helps muscles, nerves, and the heart work well." }, { h: "Vitamin B6", p: "Supports energy and brain development." }, { h: "Fiber and natural energy", p: "Easy to digest, with carbohydrates for quick fuel." }],
    ideas: {
      form: [
        { t: "Banana coins", tip: "Slice into rounds instead of eating from the peel.", l: "e" },
        { t: "Peel handle", tip: "Leave some peel on the bottom as a handle.", l: "e" },
        { t: "Banana milk", tip: "Banana blended with milk. Same flavor, sippable.", l: "e", r: "banana milk" },
        { t: "Frozen banana", tip: "Cold and firm. Let it soften a few minutes if needed.", l: "s" },
        { t: "Mashed banana", tip: "Smooth and soft. Good for spreading or dipping.", l: "s" },
        { t: "Banana chips", tip: "Crunchy and sweeter. A big texture change.", l: "s", r: "baked banana chips" },
        { t: "Banana ice cream", tip: "Frozen banana blended until creamy.", l: "s", r: "banana nice cream" }
      ],
      flavor: [
        { t: "Banana yogurt", tip: "A smooth food with a familiar flavor.", l: "e" },
        { t: "Banana smoothie", tip: "Start with mostly banana and one other fruit.", l: "s", r: "banana smoothie" },
        { t: "Banana pancakes", tip: "Soft, warm, and banana-sweet.", l: "s", r: "banana pancakes" },
        { t: "Banana muffins", tip: "Your child can do the mashing.", l: "s", r: "banana muffins" }
      ],
      pair: [
        { t: "Yogurt dip", tip: "Banana coins with a small cup of yogurt to dip.", l: "e" },
        { t: "Strawberry neighbor", tip: "One strawberry on the plate near the banana.", l: "e" },
        { t: "Frozen banana pops", tip: "Banana halves dipped in yogurt, then frozen.", l: "e", r: "frozen yogurt banana pops" },
        { t: "Banana on cereal", tip: "A few coins on top of a cereal your child already eats.", l: "s" },
        { t: "Banana and strawberry skewer", tip: "Alternate the two fruits on a kid-safe skewer.", l: "s" }
      ]
    }
  },
  {
    slug: "strawberries", name: "Strawberries", aliases: ["strawberry","berries"],
    nutrition: [{ h: "Vitamin C", p: "A cup of strawberries has more than a young child needs in a day." }, { h: "Antioxidants", p: "Anthocyanins give strawberries their red color." }, { h: "Fiber and folate", p: "Support digestion and healthy cell growth." }],
    ideas: {
      form: [
        { t: "Strawberry coins", tip: "Slice into rounds instead of serving whole. Same taste, new shape.", l: "e" },
        { t: "Fun-shape cutouts", tip: "Use a small cutter to make hearts or stars.", l: "e" },
        { t: "Blended strawberry drink", tip: "Strawberries blended with water and ice. Same taste, no chewing.", l: "e", r: "strawberry slush" },
        { t: "Strawberry popsicles", tip: "Blended and frozen. Kids love picking the mold.", l: "e", r: "strawberry popsicles" },
        { t: "Frozen strawberries", tip: "Cold and firm. Let them thaw a few minutes to soften the change.", l: "s" },
        { t: "Freeze-dried strawberries", tip: "Crunchy and airy with an intense flavor. A big texture jump.", l: "s" },
        { t: "Dried strawberries", tip: "Chewy and sweeter. Easy to pack in a lunchbox.", l: "s" },
        { t: "Mashed strawberries", tip: "Smash with a fork to spread on something or dip into.", l: "s" }
      ],
      flavor: [
        { t: "Strawberry yogurt", tip: "A smooth texture with a flavor your child already knows.", l: "e" },
        { t: "Strawberry milk", tip: "Just a drink, so there is no new texture at all.", l: "e", r: "homemade strawberry milk" },
        { t: "Strawberry milkshake", tip: "A treat that keeps strawberry in the spotlight.", l: "e", r: "strawberry milkshake" },
        { t: "Strawberry ice cream", tip: "Cold and creamy. Try a scoop next to fresh berries.", l: "e" },
        { t: "Strawberry jam on toast", tip: "Works best on a toast or cracker your child already eats.", l: "e" },
        { t: "Strawberry applesauce pouch", tip: "Squeezable and predictable every single time.", l: "e" },
        { t: "Strawberry smoothie", tip: "Blends in other fruits. Start with mostly strawberry.", l: "s", r: "strawberry smoothie" },
        { t: "Strawberry muffins", tip: "Baked strawberries are softer and warmer. A big change.", l: "s", r: "strawberry muffins" }
      ],
      pair: [
        { t: "Yogurt dip", tip: "Serve a small cup of dip on the side. Dipping is optional.", l: "e" },
        { t: "Berry neighbors", tip: "Place one raspberry or blueberry near the strawberries.", l: "e" },
        { t: "Chocolate-dipped strawberries", tip: "Hands-on dipping gives a familiar food a fun twist.", l: "e", r: "chocolate dipped strawberries" },
        { t: "On a waffle or pancake", tip: "Two foods touching. Try strawberries on top first.", l: "s" },
        { t: "Fruit skewers", tip: "Alternate strawberries with banana.", l: "s" },
        { t: "Strawberry roll-ups", tip: "Tortilla, cream cheese, and strawberry, rolled and sliced like sushi.", l: "s", r: "strawberry tortilla roll ups" }
      ]
    }
  },
  {
    slug: "yogurt", name: "Yogurt", aliases: ["yoghurt","yogurt cup","yogurt tube"],
    nutrition: [{ h: "Calcium and protein", p: "Supports strong bones and growing muscles." }, { h: "Live cultures", p: "Many yogurts contain probiotics that support a healthy gut." }, { h: "Vitamin D", p: "Often added, and it helps the body use calcium." }],
    ideas: {
      form: [
        { t: "A new flavor, same brand", tip: "Keep the texture and packaging familiar.", l: "e" },
        { t: "Yogurt tube", tip: "Same yogurt, squeezable and on the go.", l: "e" },
        { t: "Drinkable yogurt", tip: "Thinner and sippable.", l: "e" },
        { t: "Frozen yogurt drops", tip: "Pipe small dots onto a tray and freeze.", l: "s", r: "frozen yogurt drops" },
        { t: "Frozen yogurt bark", tip: "Spread on a tray, add toppings, freeze, and break into pieces.", l: "s", r: "frozen yogurt bark" },
        { t: "Greek yogurt", tip: "Thicker and tangier. Mix with the usual yogurt at first.", l: "s" }
      ],
      flavor: [
        { t: "Yogurt smoothie", tip: "Blend with a fruit your child already likes.", l: "e", r: "yogurt smoothie" },
        { t: "Yogurt popsicles", tip: "The same yogurt, frozen on a stick.", l: "e", r: "yogurt popsicles" },
        { t: "Yogurt fruit dip", tip: "Use yogurt as a dip for a favorite fruit.", l: "e", r: "yogurt fruit dip" },
        { t: "Yogurt parfait", tip: "Layers of yogurt and one new topping.", l: "s", r: "yogurt parfait" }
      ],
      pair: [
        { t: "Sprinkles on top", tip: "A few sprinkles on a familiar yogurt.", l: "e" },
        { t: "Fruit on the side", tip: "A favorite fruit next to the cup, not in it.", l: "e" },
        { t: "Your child's mix-in", tip: "Your child picks and stirs in one topping.", l: "e" },
        { t: "A swirl of jam", tip: "A small swirl on part of the yogurt.", l: "s" },
        { t: "Granola crumbs", tip: "A light sprinkle adds crunch to something smooth.", l: "s" }
      ]
    }
  },
  {
    slug: "toast", name: "Toast", aliases: ["bread","buttered toast","white bread"],
    nutrition: [{ h: "Energy", p: "Carbohydrates fuel play, learning, and growing." }, { h: "Iron and folate", p: "Most bread is made with enriched flour." }, { h: "Fiber option", p: "Whole-grain bread adds fiber when your child is ready." }],
    ideas: {
      form: [
        { t: "Strips or triangles", tip: "Change only the cut.", l: "e" },
        { t: "Cookie-cutter toast", tip: "Your child presses shapes out of the bread.", l: "e" },
        { t: "A new bread brand", tip: "Try one piece next to the usual toast.", l: "e" },
        { t: "Lighter or darker toast", tip: "Adjust how toasted it is, just a little.", l: "e" },
        { t: "English muffin", tip: "Nooks, crannies, and a chewier bite.", l: "s" },
        { t: "Bagel", tip: "Thicker and chewier than toast.", l: "s" }
      ],
      flavor: [
        { t: "Toast with jam", tip: "A thin layer on one corner or half.", l: "e" },
        { t: "Cinnamon toast", tip: "A light sprinkle of cinnamon sugar on butter.", l: "e", r: "cinnamon sugar toast" },
        { t: "Grilled cheese", tip: "Toasty bread with melty cheese inside.", l: "s", r: "grilled cheese" },
        { t: "French toast sticks", tip: "Softer and sweeter than regular toast.", l: "s", r: "french toast sticks" }
      ],
      pair: [
        { t: "Fruit on the side", tip: "A few slices of a new fruit next to the toast.", l: "e" },
        { t: "A thin new spread", tip: "Cream cheese or a nut or seed butter, thinly spread.", l: "s" },
        { t: "Toast art", tip: "Your child paints with spreads or makes a face with fruit.", l: "s" },
        { t: "Toast dippers with egg", tip: "Toast strips next to a soft egg for optional dipping.", l: "s", r: "soft boiled egg with toast soldiers" }
      ]
    }
  },
  {
    slug: "cheese", name: "Cheese", aliases: ["cheese stick","string cheese","cheddar","cheese slices"],
    nutrition: [{ h: "Calcium", p: "Supports strong bones and teeth." }, { h: "Protein", p: "Helps build and repair growing muscles." }, { h: "Vitamin B12", p: "Supports energy and healthy nerves." }],
    ideas: {
      form: [
        { t: "Sticks, slices, or cubes", tip: "Same cheese, new shape. Cookie cutters work great on slices.", l: "e" },
        { t: "A new brand, same kind", tip: "Similar color and taste, slightly different texture.", l: "e" },
        { t: "Shredded cheese", tip: "Small pieces feel very different in the mouth.", l: "s" },
        { t: "Melted cheese", tip: "Warm and stretchy instead of firm.", l: "s" },
        { t: "Warm cheese sauce", tip: "Pourable and smooth. Great for dipping.", l: "s", r: "easy cheese sauce" },
        { t: "Baked cheese crisps", tip: "Small piles of cheese baked until crunchy.", l: "s", r: "baked cheese crisps" }
      ],
      flavor: [
        { t: "Cheese crackers", tip: "Cheesy flavor with a crunch.", l: "e" },
        { t: "Cheese quesadilla", tip: "Melty cheese in a soft tortilla.", l: "s", r: "cheese quesadilla" },
        { t: "Grilled cheese", tip: "Warm, melty cheese in toasty bread.", l: "s", r: "grilled cheese" },
        { t: "A mild new cheese", tip: "Try mozzarella or Monterey Jack next to the usual.", l: "s" }
      ],
      pair: [
        { t: "Cheese and crackers", tip: "A classic combo. Keep them side by side.", l: "e" },
        { t: "Cheese on an apple slice", tip: "A thin slice of cheese on a thin slice of apple.", l: "s" },
        { t: "Cheese and melon skewer", tip: "Alternate cheese cubes with small melon cubes.", l: "s" },
        { t: "Cheese on broccoli", tip: "A little melted cheese on one broccoli floret.", l: "s", r: "cheesy broccoli" }
      ]
    }
  }
];
