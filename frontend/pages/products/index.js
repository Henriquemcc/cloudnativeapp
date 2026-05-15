import { List } from "@mui/material";
import PageHeader from "../../components/pagetemplate/PageHeader";
import PageContent from "../../components/pagetemplate/PageContent";
import PageContentLabels from "../../components/pagetemplate/PageContentLabels";

const pageLabel = "Products";
const itemsLabels = [
  "Id",
  "Name",
  "Price",
  "Category",
  "Count",
  "Rating",
  "Actions",
];

export default function Products() {
  return (
    <List>
      <PageHeader pageLabel={pageLabel}></PageHeader>
      <PageContent>
        <PageContentLabels labels={itemsLabels} />
      </PageContent>
    </List>
  );
}
