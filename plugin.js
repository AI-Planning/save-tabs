
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
            var contents = {};

            $('.editor').each(function() {
                var fname = $('#tab-' + this.id).text();
                var fcontent = window.ace.edit(this.id).getSession().getValue();
                contents[fname] = fcontent;
            });

            return contents;
        },

        load: function(settings) {

            // First nix all of the existing tabs if there is content to load
            if (!($.isEmptyObject(settings))) {
                console.log("Flushing out the existing tabs...");
                while ($('.pddl-tab').length > 0)
                    closeDocument();
            } else console.log("Keeping the existing tabs...");

            console.log(settings);

            // Next, load all of the saved tabs
            for (var fname in settings) {
                createEditor(settings[fname]);
                renamePddl(fname);
            }
        }

    };
});
