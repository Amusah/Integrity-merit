import supabase from "./supabase";

export const getDepartments = async () => {
  const { data, error } = await supabase.from("Departments").select("*");

  if (error) {
    console.error(error);
    throw new Error("Departments could not be loaded");
  }
  return data;
};
