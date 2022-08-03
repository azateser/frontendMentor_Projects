import Tab from "./Tab";


function Tabs() {
    const tabArray = [
            {
                id: 1,
                title: "How many team members can I invite?",
                description: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
                descriptionShow: false,
            },
            {
                id: 2,
                title: "What is the maximum file upload size?",
                description: "No more than 2GB. All files in your account must fit your allotted storage space.",
                descriptionShow: true,
            },
            {
                id: 3,
                title: "How do I reset my password?",
                description: "Demo description description description",
                descriptionShow: false,
            },
            {
                id: 4,
                title: "Can I cancel my subscription?",
                description: "Yes! Send us a message and we’ll process your request no questions asked.",
                descriptionShow: false,
            },
            {
                id: 5,
                title: "Do you provide additional support?",
                description: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
                descriptionShow: false,
            },
        ]



    return (
        <div className="h-10">
            {tabArray.map((tab, index) => (
                    <Tab
                        key={index}
                        title={tab.title}
                        description={tab.description}
                        descriptionShow={tab.descriptionShow}
                        id={tab.id}
                    />
            ))}
        </div>

    );
}



export default Tabs;