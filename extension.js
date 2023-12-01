const Main = imports.ui.main;

let orgIndicator, Menu;

class Extension {
    constructor() {
	this._systemMenu = Main.panel.statusArea.aggregateMenu._system;
        orgIndicator = Main.panel.statusArea.aggregateMenu._power;
        Menu = Main.panel.statusArea.aggregateMenu._system.menu;
    }

    enable() {
        this._systemMenu._lockScreenItem.visible = false;
        orgIndicator.indicators.hide();
        Menu.actor.remove_child(Main.panel.statusArea.aggregateMenu._system._sessionSubMenu);
    }

    disable() {
        this._systemMenu._lockScreenItem.visible = true;
        orgIndicator.indicators.show();
        Menu.box.insert_child_at_index(Main.panel.statusArea.aggregateMenu._system._sessionSubMenu, Main.panel.statusArea.aggregateMenu._system.menu.numMenuItems)
    }
}

function init() {
    return new Extension();
}
