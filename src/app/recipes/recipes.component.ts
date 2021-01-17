import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  CARDS = [
    {
      title: 'Peggy\'s Pecan Pie',
      image: 'assets/Images/Pecan-Pie.jpg',
      imageAlt: 'pecan pie',
      ingredients: '<ul><li>3 eggs</li><li>2/3 cup sugar</li><li>1/3 cup butter, melted</li><li>1/4 tsp salt</li><li>1 cup dark corn syrup</li><li>1 cup pecan halves</li><li>Pie crust/pastry shell</li></ul>',
      directions: '<ol><li>Preheat the oven to 350°F.</li><li>Beat eggs thoroughly with sugar, butter, salt, and corn syrup.  Add pecan halves.</li><li>Lay uncooked pie crust in a 9-inch pie plate and pour in batter.</li><li>Bake for 50 minutes or until a knife inserted halfway between center and edge comes out clean.  Let cool.</ol>'
    },
    {
      title: 'Grandma\'s Oatmeal Cookies',
      image: 'assets/Images/Memory-Book.jpg',
      imageAlt: 'Memory book with Grandma\'s handwritten recipe',
      ingredients: '<ul><li>1 cup shortening</li><li>1 cup brown sugar</li><li>1 cup white sugar</li><li>2 eggs, beaten</li><li>1 tsp vanilla</li><li>1 ½ cups flour</li><li>1 tsp salt</li><li>1 tsp baking soda</li><li>3 cups quick oats</li><li>½ cup pecans</li></ul>',
      directions: '<ol><li>Preheat the oven to 350°F.</li><li>Thoroughly cream shortening and sugars; add eggs & vanilla and beat well.</li><li>Sift dry ingredients & add to creamed mixture.  Add in oats and nuts. </li><li>Bake 8-10 minutes.</ol>'
    },
    {
      title: 'Jen\'s Granola',
      image: 'assets/Images/Granola.jpg',
      imageAlt: 'granola bars',
      ingredients: '<ul><li>4 cups old fashioned oats (not instant)</li><li>½ cup brown sugar</li><li>½ tsp salt</li><li>½ tsp cinnamon</li><li>1 ½ cups pecans</li><li>1 ½ cups raisins or dried cranberries (optional)</li><li>½ cup olive oil</li><li>½ cup honey or agave nectar</li><li>2 tsp vanilla</li></ul>',
      directions: '<ol><li>Preheat the oven to 300°F.</li><li>Mix together oats, sugar, salt, cinnamon, pecans & raisins.</li><li>In a saucepan, warm oil and honey and stir in vanilla.  Pour over dry mixture and stir.  Spread granola on large baking sheet.</li><li>Bake 40 minutes.  Cut granola while warm and let cool.</ol>'
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
