

function save_tab_contents () {
    // Coming soon...
    return { };
}

function load_tab_contents (contents) {
    // Coming soon...
}

/********************************************************************/

define(function () {

    return {

        name: "Save Tabs",
        author: "Christian Muise",
        email: "christian.muise@gmail.com",
        description: "Plugin to save the state of the PDDL files when saving the plugin setup.",

        initialize: function() { /* Do Nothing */ },

        disable: function() { /* Do Nothing */ },

        save: function() {
            return save_tab_contents();
        },

        load: function(settings) {
            load_tab_contents(settings);
        }

    };
});
