const createMenuPage = () => {
    const wrapper = document.createElement('article');

    const heading = document.createElement('h1');
    const subtitle = document.createElement('h2');

    const menuMilkTeasHeading = document.createElement('h3')
    const menuFruitTeasHeading = document.createElement('h3')
    const menuToppingsHeading = document.createElement('h3')

    const menuMilkTeasList = document.createElement('ul')    
    const menuFruitTeasList = document.createElement('ul')    
    const menuToppingsList = document.createElement('ul')

    const milkTeas = ['Milk Tea', 'Hokkaido Milk Tea', 'Taro Milk Tea'];
    const fruitTeas = ['Mango Green Tea', 'Peach Black Tea', 'Strawberry Barley Tea'];
    const toppings = ['Homemade Pearls', 'Pudding', 'Nata Jelly'];


    heading.innerText = 'Menu';
    subtitle.innerText = 'Milk teas, fruit juice teas, and all the toppings you could imagine';

    menuMilkTeasHeading.innerText = "Milk Teas";
    menuFruitTeasHeading.innerText = "Fruit Teas";
    menuToppingsHeading.innerText = "Toppings";

    milkTeas.forEach(item => {
        let milkTeaItem = document.createElement('li');
        milkTeaItem.innerText = item;
        menuMilkTeasList.appendChild(milkTeaItem);
    })

    fruitTeas.forEach(item => {
        let fruitTeaItem = document.createElement('li');
        fruitTeaItem.innerText = item;
        menuFruitTeasList.appendChild(fruitTeaItem);
    })

    toppings.forEach(item => {
        let toppingItem = document.createElement('li');
        toppingItem.innerText = item;
        menuToppingsList.appendChild(toppingItem);
    })
    
    wrapper.appendChild(heading);
    wrapper.appendChild(subtitle);
    wrapper.appendChild(menuMilkTeasHeading)
    wrapper.appendChild(menuMilkTeasList)
    wrapper.appendChild(menuFruitTeasHeading)
    wrapper.appendChild(menuFruitTeasList)
    wrapper.appendChild(menuToppingsHeading)
    wrapper.appendChild(menuToppingsList)


    return wrapper;
}

export default createMenuPage;