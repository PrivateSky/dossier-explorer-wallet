export function isGridLayout() {
  let model = this;

  return model.getChainValue("switchLayout.active") === "grid";
}

export function isListLayout() {
  let model = this;

  return model.getChainValue("switchLayout.active") === "list";
}

export function isFileSelected() {
  let model = this;

  const selectedItems = model.getChainValue("rightMenu.selectedItems");
  return selectedItems && selectedItems.length;
}

export function isSignOutModalOpened() {
  let model = this;

  return model.getChainValue("signOut.modal.opened") === true;
}

export function hasExitModalError() {
  let model = this;

  return model.getChainValue("signOut.modal.error.hasError") === true;
}

export function isDossierEmpty() {
  let model = this;
  let dossierItems = model.getChainValue("dossierDetails.items");

  return !dossierItems || !dossierItems.length;
}

export function isCreateDossierModal() {
  let model = this;

  return model.getChainValue("addItems.selectedModal") === "create-dossier";
}

export function isNewDossierCreateState() {
  let model = this;

  return model.getChainValue("createDossierModal.createState") === true;
}

export function hasNewDossierModalError() {
  let model = this;

  return model.getChainValue("createDossierModal.hasError") === true;
}
