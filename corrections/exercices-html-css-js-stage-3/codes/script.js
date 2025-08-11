function ajouterTache() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const taskText = taskInput.value.trim(); // Retirer les espaces inutiles
  
  if (taskText === "") {
    alert("Veuillez entrer une tâche !");
    return;
  }
  
  const li = document.createElement("li");
  li.classList.add("task-item"); // Ajouter la classe task-item
  li.textContent = taskText;
  
  // Événement : marquer comme terminé quand on clique sur la tâche
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    compterTachesTerminees();
  });
  
  // Bouton pour supprimer une tâche 
  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.classList.add("delete-btn");
  btnSupprimer.addEventListener("click", function (e) {
    e.stopPropagation(); // Empêche de marquer comme terminé
    li.remove();
    compterTachesTerminees();
  });
  
  li.appendChild(btnSupprimer);
  taskList.appendChild(li);
  taskInput.value = ""; // Réinitialiser le champ
  compterTachesTerminees();
}

function compterTachesTerminees() {
  const tachesTerminees = document.querySelectorAll(".task-item.completed").length;
  document.getElementById("counter").textContent = "Tâches terminées : " + tachesTerminees;
}

// Permettre d'ajouter une tâche en appuyant sur Entrée
document.getElementById("task-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    ajouterTache();
  }
});