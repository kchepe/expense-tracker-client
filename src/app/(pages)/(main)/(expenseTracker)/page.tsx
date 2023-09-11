import Box from "@/app/common/Box";
import TransactionForm from "./components/TransactionForm";
import Main from "./components/Main";

const ExpenseTacker = async () => {
  return (
    <Box className="grid grid-cols-12 sm:gap-10 xl:w-3/5 lg:w-4/5 sm:w-5/5 xs-w-full sm:m-auto">
      <Box className="sm:col-span-7 col-span-full">
        <Main />
      </Box>
      <Box className="sm:col-span-5 sm:block hidden">
        <TransactionForm />
      </Box>
    </Box>
  );
};

export default ExpenseTacker;
