import React from "react";
import List from "@mui/material/List";
import PageHeader from "../../components/pagetemplate/PageHeader";
import PageContent from "../../components/pagetemplate/PageContent";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button, Card, Grid, ListItem } from "@mui/material";
import { ControllerTextField } from "@/components/ControllerTextField";

const pageLabel = "Edit Product";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSumbitForm = async (data) => {
    try {
      if (id == "-1") {
        alert(`insert new product ${JSON.stringify(data)}`);
      } else {
        alert(`update existing product ${JSON.stringify(data)}`);
      }
      router.back();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <List>
      <PageHeader pageLabel={pageLabel} />
      <PageContent>
        <ListItem>
          <Grid item md={12} xs={12}>
            <Card>
              <form onSubmit={handleSubmit(onSumbitForm)}>
                <List>
                  <Grid>
                    <ControllerTextField
                      name="name"
                      label="Name"
                      control={control}
                      errors={errors.name}
                      rules={{ required: true }}
                    />
                    <ControllerTextField
                      name="price"
                      label="Price"
                      control={control}
                      errors={errors.price}
                      rules={{ required: true }}
                    />
                    <ControllerTextField
                      name="category"
                      label="Category"
                      control={control}
                      errors={errors.category}
                      rules={{ required: true }}
                    />
                    <ControllerTextField
                      name="count"
                      label="Count"
                      control={control}
                      errors={errors.count}
                      rules={{ required: true }}
                    />
                    <ControllerTextField
                      name="rating"
                      label="Rating"
                      control={control}
                      errors={errors.rating}
                      rules={{ required: true }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="primary"
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="inherit"
                      onClick={() => router.push('/products')}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </List>
              </form>
            </Card>
          </Grid>
        </ListItem>
      </PageContent>
    </List>
  );
}
