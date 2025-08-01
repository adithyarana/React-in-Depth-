import { render, screen } from "@testing-library/react"
import RestaurantCard, { Withpromotedcard } from "../RestaurantCard"
import RestaurantCardmock from "../mocks/RestaurantCardmock.json"
import "@testing-library/jest-dom"


it("should load restaurant card with prop data", () => {
    
    render(<RestaurantCard resdata={RestaurantCardmock}/>)

    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
})

it("should render resturant card component with promoted lable",()=>{

    const PromotedCard = Withpromotedcard(RestaurantCard);
    render(<PromotedCard resdata={RestaurantCardmock}/>)


    const name = screen.getByRole("heading",{name:"Promoted"});
    expect(name).toBeInTheDocument();
})