(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function findFieldRow(fieldName) {
    // SuiteCRM legacy met souvent un container avec id "nameLabel"/"name" etc.
    // On cherche l’input/select par name, puis on remonte à la cellule.
    var el = document.querySelector('[name="' + fieldName + '"]');
    if (!el) return null;

    // remonte jusqu'à la cellule <td>
    var td = el.closest("td");
    return td || el.parentElement;
  }

  function insertButton() {
    // On veut l’afficher dans le panel "Suivi" à côté de next_action_date_c
    var td = findFieldRow("next_action_date_c") || findFieldRow("action_list_c");
    if (!td) return false;

    // évite doublon
    if (document.getElementById("btnCreateAction")) return true;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "btnCreateAction";
    btn.className = "button";
    btn.style.marginLeft = "10px";
    btn.innerText = "Créer action";

    btn.onclick = function () {
      var action = document.querySelector('[name="action_list_c"]')?.value || "";
      var dt = document.querySelector('[name="next_action_date_c"]')?.value || "";
      var assigned = document.querySelector('[name="assigned_user_name"]')?.value || "";

      if (!action) { alert("Sélectionne une valeur dans Action list."); return; }
      if (!dt) { alert("Renseigne la Date de la prochaine action."); return; }

      // Crée une Call en pré-remplissant via querystring (EditView)
      // parent_type=Accounts & parent_id (record id)
      var recordId =
        document.querySelector('input[name="record"]')?.value ||
        new URLSearchParams(window.location.search).get("record") ||
        "";

      if (!recordId) { alert("Impossible de retrouver l'ID du restaurant."); return; }

      var url =
        "index.php?module=Calls&action=EditView" +
        "&parent_type=Accounts" +
        "&parent_id=" + encodeURIComponent(recordId) +
        "&parent_name=" + encodeURIComponent(document.querySelector('[name="name"]')?.value || "") +
        "&name=" + encodeURIComponent(action) +
        "&date_start=" + encodeURIComponent(dt);

      // optionnel: juste pour info (le champ assigné est un id normalement, pas un nom)
      // on ne force pas assigned_user_id ici tant qu’on n’a pas l’id.
      window.location.href = url;
    };

    // On le met à côté du champ dans la même cellule
    td.appendChild(btn);
    return true;
  }

  ready(function () {
    // Certaines vues chargent tard → retry
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (insertButton() || tries > 30) clearInterval(timer);
    }, 300);
  });
})();
 
