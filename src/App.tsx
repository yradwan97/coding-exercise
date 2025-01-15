import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankCard from "./components/BankCard";
import DataTable from "./components/DataTable";
import { columns } from "./components/Columns";
import transactions from "./assets/transactions";

function App() {
  return (
    <div className="container justify-center w-full">
      <Tabs defaultValue="card">
        <TabsList>
          <TabsTrigger value="card">Card</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="card">
          <BankCard />
        </TabsContent>
        <TabsContent value="transactions">
          <DataTable columns={columns} data={transactions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
