
export async function unidadCreate() {
try {
  
  await window.api.invoke("unidad:create", {
    name: "Litro",
    simbolo: "l"
  })
} catch (error) {
  console.log(error)
}
}