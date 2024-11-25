import NewBookmarkForm from "../components/NewBookmarkForm";
import SideBar from "../components/SideBar";

const NewBookmarkPage = () => {
  return (
    <section>
      <SideBar />
      <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
        <NewBookmarkForm />
      </div>
    </section>
  );
};

export default NewBookmarkPage;
