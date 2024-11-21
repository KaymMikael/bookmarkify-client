import PageLayout from "./PageLayout";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 shadow bg-white dark:bg-slate-900">
      <PageLayout>
        <Nav />
      </PageLayout>
    </header>
  );
};

export default Header;
