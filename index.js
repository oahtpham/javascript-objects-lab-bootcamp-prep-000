var recipes = { prop: 1 }

function updateObjectWithKeyAndValue (object, key, value) {
  recipes['prop2'] = 2;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

var newRecipes = Object.assign({}, recipes)

function deleteFromObjectByKey (object, key) {
  delete newRecipes.prop;
  return newRecipes
}

deleteFromObjectByKey (newRecipes, 'prop')

function destructivelyDeleteFromObjectByKey (object, key) {
  delete recipes.prop
  return recipes
}

destructivelyDeleteFromObjectByKey (recipes,prop)
