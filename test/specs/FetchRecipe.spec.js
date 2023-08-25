import { mount } from "@vue/test-utils";
import Results from "../../src/components/Results.vue";

describe("Results", () => {
    before(async () => {
        // Add a delay before running tests to allow the server to start
        // Adjust the delay time as needed (e.g., 5000 milliseconds)
        await new Promise((resolve) => setTimeout(resolve, 5000));
    });

    it("renders when there are cookbooks", async () => {
        const cookbooks = [];

        const wrapper = mount(Results, {
            propsData: { cookbooks },
        });

        expect(wrapper.exists()).toBe(true);

        const cookbookElements = wrapper.findAll(
            ".meal.section .content .serving.card",
        );
        expect(cookbookElements.length).toBe(cookbooks.length);
    });

    it('renders "NothingToShowYou" component when no cookbooks are available', async () => {
        const cookbooks = []; // Empty array to simulate no cookbooks

        const wrapper = mount(Results, {
            propsData: { cookbooks },
        });
        const nothingToShowYouComponent = wrapper.findComponent({
            name: "NothingToShowYou",
        });
        expect(nothingToShowYouComponent.exists()).toBe(true);
    });
});
