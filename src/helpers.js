export function emptyFields(inputs) {
  let res = false;
  inputs.forEach((input) => {
    if (!input.value) res = true;
  });

  return res;
}

export	function clearInputs(inputs){
    inputs.forEach((input) => input.value = '')
}

export function calcNumberofPages(totalOfresults,itemsPerPage){
  return (Math.ceil(totalOfresults/ itemsPerPage))
}
