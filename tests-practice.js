import LoginPage from "./tests-practice/loginPage"


describe("Login Page tests", () => {
    it("should login successfully", async() => {
        await LoginPage.open()
        await LoginPage.login("login", "password")
        await expect(browser).toHaveUrlContaining("/dashboard");
    })
}) 


