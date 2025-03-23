import supabase from "./supabase";

export const getDepartments = async () => {
  const { data, error } = await supabase.from("Departments").select("*");

  if (error) {
    console.error(error);
    throw new Error("Departments could not be loaded");
  }
  return data;
};


export const deleteDepartment = async id =>{

const { data, error } = await supabase
  .from("Departments")
  .delete()
  .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Department could not be deleted");
  }
  return data;

}