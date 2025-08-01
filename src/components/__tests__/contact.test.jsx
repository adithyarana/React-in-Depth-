import { render , screen} from "@testing-library/react"
import Contact  from "../../pages/Contact"
import "@testing-library/jest-dom"

// this is unit testing

//  describe means group of test
// we can also write it as test

// jest give two function

// beforeAll(()=>{
//     console.log("before all")
// })

// beforeEach(()=>{
//     console.log("before each")
// })

// afterAll(()=>{
//     console.log("after all")
// })

// afterEach(()=>{
//     console.log("after each")
// })

describe("Contact form test",()=>{
    test("contact form should submit",()=>{
        render(<Contact/>)
    
        const heading = screen.getByRole("heading")
     
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button",()=>{
        render(<Contact/>)
    
        const button = screen.getByRole("button")
     
        expect(button).toBeInTheDocument();
    })
    
    test("should load input name",()=>{
    
        render(<Contact/>)
    
        const input = screen.getByPlaceholderText("Enter your name")
    
        expect(input).toBeInTheDocument();
    
    })
    
    test("should load all input",()=>{
    
        render(<Contact/>)
    
        const Allinput = screen.getAllByRole("textbox")
        // console.log(Allinput);
        expect(Allinput.length).toBe(2)
    
    })
})