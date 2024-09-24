// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer1")
                .onEnd([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_dialog5",
                        "args" : [ ],
                        "method" : "hide"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog5")
                .setLeft("18.285714285714285em")
                .setTop("5.333333333333333em")
                .setCaption("home")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setLeft("27.428571428571427em")
                .setTop("7.619047619047619em")
                .setWidth("11.885714285714286em")
                .setHeight("8.076190476190476em")
                .setCaption("carregando")
                .setFontSize("3em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        events:{
            "onReady" : [
                {
                    "desc" : "Action 1",
                    "type" : "control",
                    "target" : "xui_ui_dialog5",
                    "args" : [ ],
                    "method" : "show"
                },
                {
                    "desc" : "Action 2",
                    "type" : "control",
                    "target" : "xui_timer1",
                    "args" : [
                        {
                            "interval" : 3000
                        },
                        {
                        }
                    ],
                    "method" : "setProperties"
                },
                {
                    "desc" : "Action 3",
                    "type" : "control",
                    "target" : "xui_timer1",
                    "args" : [ ],
                    "method" : "start"
                }
            ]
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});