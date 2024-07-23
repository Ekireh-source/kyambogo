import Header from "@/components/dashboard/header";
import Feedback from "@/components/tables/feedback";

const UsersPage = async () => {
    return <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <h1>List of messages</h1>
            <Feedback />

        </main>
    </div>
}

export default UsersPage;