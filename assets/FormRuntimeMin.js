var createFormRuntime=function(config,existingProperties){var rt={JQUERY:"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",JQUERY_2:"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",JQUERY_UI:"https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js",JQUERYUI_CSS:"https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/themes/redmond/jquery-ui.css",JQUERY_UI_FOR_JQUERY_2:"https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js",JQUERYUI_CSS_FOR_JQUERY_2:"https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/redmond/jquery-ui.css",MODE_SKELETON:"SKELETON",MODE_SERVER:"SERVER",MODE_CLIENT:"CLIENT",VALIDATION_SUBMITONLY:"SUBMITONLY",VALIDATION_ASYOUTYPE:"ASYOUTYPE",EVENT_CHANGE:"CHANGE",EVENT_PAGEINIT:"PAGEINIT",EVENT_NEWPAGEINIT:"NEWPAGEINIT",EVENT_CUSTOM:"CUSTOM_",OPTION_VARIABLE_SUFFIX:"_OPTIONDATA",OPTION_GROUP_VARIABLE_SUFFIX:"_OPTIONGROUPS",OPTION_VALUE:0,OPTION_DISPLAY:1,OPTION_GROUP:2,VARIABLE_NONPERSISTENT:"NONPERSISTENT",VARIABLE_SERVERONLY:"SERVER",VARIABLE_SERVERCLIENT:"SERVERCLIENT",VARIABLE_SERVERCLIENTUPDATE:"SERVERCLIENTWITHUPDATE",ENCODER_STRING:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",formName:config.formName,currentPageName:config.currentPageName,currentPageInstance:config.currentPageInstance,runtimeMode:config.runtimeMode,validationMode:config.validationMode,highlightValid:config.highlightValid,traceEnabled:config.traceEnabled||false,autoFocus:!config.disableAutoFocus,formData:config.formData,pageHistory:config.pageHistory,custom:config.custom,legacyValidators:config.legacyValidators,inIcmEnv:config.inIcmEnv,allowIcmPanelControls:config.allowIcmPanelControls,serializedPersistentVariables:config.serializedPersistentVariables,serverid:config.serverid,serverTraceFn:config.serverTraceFn,jqueryLoaded:false,jqueryLoadUrl:"",jqueryUILoaded:false,jqueryUILoadUrl:"",jqueryUICSSLoadUrl:"",debugInterface:null,formInitFn:[],pageInitFn:[],fieldInitFns:[],fieldReadyFns:[],fieldIDFns:{},fieldQueryValueFns:{},fieldUpdateValueFns:{},fieldValidationFns:{},fieldFocusFns:{},fieldShowHideFns:{},fieldShowHideHintFns:{},fieldShowHideRequiredFns:{},fieldUpdateHintFns:{},fieldEnableDisableFns:{},fieldEnableOnSubmitFns:{},fieldEventHandlerFns:{},globalEventHandlers:[],fieldFilterOptionsFns:{},fieldCustomFns:{},pageValidationFns:{},errorClearFns:{},errorDisplayFns:{},globalErrorClearAllFns:[],globalErrorClearFns:[],globalErrorDisplayFns:[],variables:{},variableChangedFns:{},apiServerCalls:{},icmPanelButtons:[],eventStack:[],focusSet:false,autoFocusSet:false,currentBusySpinner:null,busySpinnerOptions:{},busySpinnerSubmitField:"",busySpinnerSizes:{"DEFAULT":{lines:10,length:8,width:4,radius:8},"large":{lines:12,length:7,width:5,radius:10},"tiny":{lines:8,length:2,width:2,radius:3},"small":{lines:8,length:4,width:3,radius:5}},inFormSubmission:false,getVersion:function(){return"10.0.6.8"
},getFormName:function(){return rt.formName
},getPageName:function(){return rt.currentPageName
},getPageInstance:function(){return rt.currentPageInstance
},getServerid:function(){if(rt.isClient()){rt.trace("getServerid can only be invoked on the server.");
throw new Error("getServerid can only be invoked on the server.")
}return rt.serverid
},isRenderedInIcm:function(){return(rt.inIcmEnv===true)
},controlsInIcmPanelAllowed:function(){return(rt.allowIcmPanelControls===true)
},isClient:function(){return(rt.runtimeMode===rt.MODE_CLIENT)
},isServer:function(){return(rt.runtimeMode===rt.MODE_SERVER)
},isSkeleton:function(){return(rt.runtimeMode===rt.MODE_SKELETON)
},isSubmitOnlyValidation:function(){return(rt.validationMode===rt.VALIDATION_SUBMITONLY)
},isAsYouTypeValidation:function(){return(rt.validationMode===rt.VALIDATION_ASYOUTYPE)
},isHighlightValidFields:function(){return rt.highlightValid
},setDebugInterface:function(interfaceFn){rt.debugInterface=interfaceFn
},ready:function(){var f;
if((rt.formData!=undefined)&&(typeof rt.formData==="string")){if(rt.formData!==""){rt.formData=jQuery.parseJSON(rt.utilDecode(rt.formData))
}else{rt.formData={}
}}if((rt.pageHistory!=undefined)&&(typeof rt.pageHistory==="string")){if(rt.pageHistory!==""){rt.pageHistory=jQuery.parseJSON(rt.utilDecode(rt.pageHistory))
}else{rt.pageHistory={}
}}if(rt.debugInterface){rt.debugInterface.init();
rt.utilFieldSizeChanged("_DEBUGGER")
}if(rt.Handlebars){Swag.registerHelpers(rt.Handlebars);
rt.utilAddStandardHandlebarsHelpers(rt.Handlebars)
}rt.inFormSubmission=false;
if(rt.serializedPersistentVariables){rt.deserializePersistentVariables(rt.serializedPersistentVariables)
}rt.customReady();
for(f=0;
f<rt.formInitFn.length;
f++){rt.formInitFn[f](rt,rt.currentPageName,rt.currentPageInstance)
}for(f=0;
f<rt.pageInitFn.length;
f++){rt.pageInitFn[f](rt,rt.currentPageName,rt.currentPageInstance)
}for(f=0;
f<rt.fieldInitFns.length;
f++){rt.fieldInitFns[f].fn(rt,rt.currentPageName,rt.currentPageInstance)
}for(f=0;
f<rt.fieldReadyFns.length;
f++){rt.fieldReadyFns[f].fn(rt,rt.currentPageName,rt.currentPageInstance)
}if(!rt.autoFocusSet){if(!rt.autoFocus){if((rt.currentPageInstance!==0)||((rt.formData["_PAGEORDER_"]!==undefined)&&(rt.formData["_PAGEORDER_"].length>0))){rt.autoFocus=true
}}}if(rt.autoFocus){for(f=0;
f<rt.fieldInitFns.length;
f++){if(rt.canFocusField(rt.fieldInitFns[f].fieldName)){rt.focusField(rt.fieldInitFns[f].fieldName);
break
}}}if(rt.controlsInIcmPanelAllowed()&&top.iCM.PanelUtils.loadTasks){var strActionPanelText="This form";
if(top.IcmFormAppTitle){strActionPanelText=top.IcmFormAppTitle
}var strActionTasksXML="";
var ActionTasksXml=[];
if(rt.icmPanelButtons.length){for(var i=0;
i<rt.icmPanelButtons.length;
i++){var thisActionTask=rt.icmPanelButtons[i];
var thisXML="<ActionTaskId"+thisActionTask.id+" icon='"+thisActionTask.iconClass+"' text='"+thisActionTask.text+"' />";
ActionTasksXml.push(thisXML)
}strActionTasksXML=ActionTasksXml.join("")+"<separator />"
}var strTasksXML="";
strActionTasksXML=strActionTasksXML+"<welcome icon='welcomepage' text='iCM home page' />";
strActionTasksXML=strActionTasksXML+"<logout icon='logout' text='Logout' />";
strTasksXML=strTasksXML+"<ActionTasks text='"+strActionPanelText+"' expanded='true'>";
strTasksXML=strTasksXML+strActionTasksXML;
strTasksXML=strTasksXML+"</ActionTasks>";
top.iCM.PanelUtils.loadTasks(strTasksXML)
}var fieldName;
$("#"+rt.formName+"_CONTROL").closest("form").submit(function(e){if(rt.fieldEnableOnSubmitFns[rt.currentPageName]!=undefined){for(fieldName in rt.fieldEnableOnSubmitFns[rt.currentPageName]){if(rt.fieldEnableOnSubmitFns[rt.currentPageName].hasOwnProperty(fieldName)){rt.fieldEnableOnSubmitFns[rt.currentPageName][fieldName]()
}}}})
},customReady:function(){if(rt.custom!==undefined){if(typeof rt.custom.ready==="function"){rt.custom.ready.call(rt.custom,rt)
}}},trace:function(){if(rt.traceEnabled){var msg=[];
var a;
for(a=0;
a<arguments.length;
a++){msg.push(JSON.stringify(arguments[a]))
}msg=msg.join(" ");
if(rt.isClient()){if(typeof console!=="undefined"){console.log("helper.trace:",msg)
}if(rt.debugInterface!==null){rt.debugInterface.log("helper.trace",msg)
}}else{if(typeof rt.serverTraceFn==="function"){rt.serverTraceFn(rt.formName+":"+rt.currentPageName,"helper.trace:",msg)
}}}},registerFormInitFn:function(fn){rt.formInitFn.push(fn)
},registerPageInitFn:function(fn){rt.pageInitFn.push(fn)
},registerFieldInitFn:function(fieldName,fn){rt.fieldInitFns.push({fieldName:fieldName,fn:fn})
},registerFieldReadyFn:function(fieldName,fn){rt.fieldReadyFns.push({fieldName:fieldName,fn:fn})
},onFormSubmission:function(action,validate){var valid=false;
if(!rt.inFormSubmission){rt.inFormSubmission=true;
rt.trace("Starting form submission : ["+action+"] Validate: ["+validate+"]");
$("[name="+rt.formName+"_VARIABLES]")[0].value=rt.serializePersistentVariablesForSubmit();
if(validate){valid=rt.validateFormClient($("#"+rt.getFormID())[0])
}else{valid=true
}if(valid){rt.showBusy(rt.busySpinnerSubmitField)
}else{rt.inFormSubmission=false
}}else{rt.trace("WARNING: Form submission already in progress")
}return valid
},validateFormClient:function(currentForm){var err,valFailures=[],valid=false;
rt.focusSet=false;
valFailures=rt.validatePage(currentForm);
rt.errorClearAll();
if(valFailures.length>0){for(err=0;
err<valFailures.length;
err++){rt.errorDisplay(valFailures[err].NAME,valFailures[err],valFailures)
}for(err=0;
err<rt.legacyValidators["ERRCALLBACKS"].length;
err++){rt.legacyValidators["ERRCALLBACKS"][err](valFailures)
}if(!rt.focusSet){for(err=0;
err<valFailures.length;
err++){if(rt.canFocusField(valFailures[err].NAME)){rt.focusField(valFailures[err].NAME);
break
}}}}else{valid=true
}return valid
},validateFormServer:function(currentForm){var valFailures=[];
if((currentForm[rt.formName+"_FORMACTION_BACK"]===undefined)&&(currentForm[rt.formName+"_FORMACTION_SAVE"]===undefined)){valFailures=rt.validatePage(currentForm)
}return valFailures
},registerPageValidatorFn:function(valFn){rt.pageValidationFns[rt.currentPageName]=valFn
},validatePage:function(currentForm){var valResults;
if(rt.pageValidationFns[rt.currentPageName]!==undefined){valResults=rt.pageValidationFns[rt.currentPageName](currentForm)
}return valResults
},registerFieldValidatorFn:function(fieldName,valFn){if(rt.fieldValidationFns[rt.currentPageName]===undefined){rt.fieldValidationFns[rt.currentPageName]={}
}rt.fieldValidationFns[rt.currentPageName][fieldName]=valFn
},validateField:function(fieldName,currentForm,failuresArray){var valResult,valid=true;
if((rt.fieldValidationFns[rt.currentPageName]!==undefined)&&(rt.fieldValidationFns[rt.currentPageName][fieldName]!==undefined)){try{valResult=rt.fieldValidationFns[rt.currentPageName][fieldName](currentForm)
}catch(ex){valResult={FIELDID:fieldName,NAME:fieldName,DESC:fieldName,VALID:false,ERRMSG:"JavaScript Error validating: ["+fieldName+"] ["+ex.message+"]"};
if(rt.debugInterface){rt.debugInterface.logFunctionError("JavaScript Error","Validating: ["+fieldName+"] ["+ex.message+"]",rt.fieldValidationFns[rt.currentPageName][fieldName])
}}if(!valResult.VALID){failuresArray.push(valResult);
valid=false
}}return valid
},registerFieldQueryValueFn:function(fieldName,valueFn){if(rt.fieldQueryValueFns[rt.currentPageName]===undefined){rt.fieldQueryValueFns[rt.currentPageName]={}
}rt.fieldQueryValueFns[rt.currentPageName][fieldName]=valueFn
},queryFieldValue:function(){var val="",fieldName,pageName,lookonOtherPages,valFound=false;
if(arguments.length===1){fieldName=arguments[0];
pageName=rt.currentPageName;
lookonOtherPages=true
}else{if(arguments.length===2){pageName=arguments[0];
fieldName=arguments[1];
lookonOtherPages=false
}else{if(arguments.length===3){pageName=arguments[0];
fieldName=arguments[1];
lookonOtherPages=false;
val=arguments[2]
}else{throw"Invalid number of arguments supplied to queryFieldValue."
}}}if((rt.isClient())&&(pageName===rt.currentPageName)){if((rt.fieldQueryValueFns[rt.currentPageName]!==undefined)&&(rt.fieldQueryValueFns[rt.currentPageName][fieldName]!==undefined)){val=rt.fieldQueryValueFns[rt.currentPageName][fieldName]();
valFound=true
}}else{if(rt.formData[pageName+"_"+"1"]!==undefined){if(rt.formData[pageName+"_"+"1"][fieldName]!==undefined){val=rt.formData[pageName+"_"+"1"][fieldName];
valFound=true
}}}if((!valFound)&&(lookonOtherPages)){for(pageName in rt.formData){if(rt.formData.hasOwnProperty(pageName)){if(pageName!==(rt.currentPageName+"_"+"1")){if(rt.formData[pageName][fieldName]!==undefined){val=rt.formData[pageName][fieldName];
valFound=true;
break
}}}}}return val
},registerFieldUpdateValueFn:function(fieldName,updateFn){if(rt.fieldUpdateValueFns[rt.currentPageName]===undefined){rt.fieldUpdateValueFns[rt.currentPageName]={}
}rt.fieldUpdateValueFns[rt.currentPageName][fieldName]=updateFn
},updateFieldValue:function(){var fieldName,pageName,pageInstance,value,validParams=true;
if(arguments.length===2){pageName=rt.currentPageName;
pageInstance="1";
fieldName=arguments[0];
value=arguments[1]
}else{if((arguments.length===3)&&(rt.isClient()&&(arguments[0]===rt.currentPageName))){pageName=arguments[0];
pageInstance="1";
fieldName=arguments[1];
value=arguments[2]
}else{if((arguments.length===3)&&(!rt.isClient())){pageName=arguments[0];
pageInstance="1";
fieldName=arguments[1];
value=arguments[2]
}else{if((arguments.length===4)&&(!rt.isClient())){pageName=arguments[0];
pageInstance=String(arguments[1]);
fieldName=arguments[2];
value=arguments[3]
}else{validParams=false
}}}}if(validParams){if(rt.isClient()){if(pageName===rt.currentPageName){if((rt.fieldUpdateValueFns[pageName]!==undefined)&&(rt.fieldUpdateValueFns[pageName][fieldName]!==undefined)){var fireEvents=rt.fieldUpdateValueFns[pageName][fieldName](value);
if((fireEvents==undefined)||(fireEvents==true)){rt.executeEventHandlers(fieldName,rt.EVENT_CHANGE,true)
}}}}else{if((rt.formData[pageName+"_"+pageInstance]===undefined)&&(pageName===rt.currentPageName)){rt.formData[pageName+"_"+pageInstance]={}
}if(rt.formData[pageName+"_"+pageInstance]!==undefined){rt.formData[pageName+"_"+pageInstance][fieldName]=value
}}}},registerFieldFocusFn:function(fieldName,focusFn){if(rt.fieldFocusFns[rt.currentPageName]===undefined){rt.fieldFocusFns[rt.currentPageName]={}
}rt.fieldFocusFns[rt.currentPageName][fieldName]=focusFn
},canFocusField:function(fieldName){return((rt.fieldFocusFns[rt.currentPageName]!==undefined)&&(rt.fieldFocusFns[rt.currentPageName][fieldName]!==undefined))
},focusField:function(fieldName){if((rt.fieldFocusFns[rt.currentPageName]!==undefined)&&(rt.fieldFocusFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldFocusFns[rt.currentPageName][fieldName]();
rt.focusSet=true
}},focusActionButton:function(actionName,label){var fieldName="FORMACTION_"+actionName;
if((rt.fieldFocusFns[rt.currentPageName]!==undefined)&&(rt.fieldFocusFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldFocusFns[rt.currentPageName][fieldName](label);
rt.focusSet=true
}},enableAutoFocus:function(){rt.autoFocus=true;
rt.autoFocusSet=true
},disableAutoFocus:function(){rt.autoFocus=false;
rt.autoFocusSet=true
},registerFieldShowHideFn:function(fieldName,showHideFn){if(rt.fieldShowHideFns[rt.currentPageName]===undefined){rt.fieldShowHideFns[rt.currentPageName]={}
}rt.fieldShowHideFns[rt.currentPageName][fieldName]=showHideFn
},showField:function(fieldName){if((rt.fieldShowHideFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideFns[rt.currentPageName][fieldName](true);
rt.utilFieldSizeChanged(fieldName)
}},hideField:function(fieldName){if((rt.fieldShowHideFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideFns[rt.currentPageName][fieldName](false);
rt.utilFieldSizeChanged(fieldName)
}},registerFieldRequiredShowHideFn:function(fieldName,showHideRequiredFn){if(rt.fieldShowHideRequiredFns[rt.currentPageName]===undefined){rt.fieldShowHideRequiredFns[rt.currentPageName]={}
}rt.fieldShowHideRequiredFns[rt.currentPageName][fieldName]=showHideRequiredFn
},showFieldRequired:function(fieldName,requiredMarker,titleText){if((rt.fieldShowHideRequiredFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideRequiredFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideRequiredFns[rt.currentPageName][fieldName](true,requiredMarker,titleText)
}},hideFieldRequired:function(fieldName){if((rt.fieldShowHideRequiredFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideRequiredFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideRequiredFns[rt.currentPageName][fieldName](false)
}},registerFieldHintShowHideFn:function(fieldName,showHideHintFn){if(rt.fieldShowHideHintFns[rt.currentPageName]===undefined){rt.fieldShowHideHintFns[rt.currentPageName]={}
}rt.fieldShowHideHintFns[rt.currentPageName][fieldName]=showHideHintFn
},showFieldHint:function(fieldName){if((rt.fieldShowHideHintFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideHintFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideHintFns[rt.currentPageName][fieldName](true);
rt.utilFieldSizeChanged(fieldName)
}},hideFieldHint:function(fieldName){if((rt.fieldShowHideHintFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideHintFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideHintFns[rt.currentPageName][fieldName](false);
rt.utilFieldSizeChanged(fieldName)
}},showFieldHints:function(){if(rt.fieldShowHideHintFns[rt.currentPageName]!==undefined){var fieldName;
for(fieldName in rt.fieldShowHideHintFns[rt.currentPageName]){if(rt.fieldShowHideHintFns[rt.currentPageName].hasOwnProperty(fieldName)){rt.fieldShowHideHintFns[rt.currentPageName][fieldName](true);
rt.utilFieldSizeChanged(fieldName)
}}}},hideFieldHints:function(){if(rt.fieldShowHideHintFns[rt.currentPageName]!==undefined){var fieldName;
for(fieldName in rt.fieldShowHideHintFns[rt.currentPageName]){if(rt.fieldShowHideHintFns[rt.currentPageName].hasOwnProperty(fieldName)){rt.fieldShowHideHintFns[rt.currentPageName][fieldName](false);
rt.utilFieldSizeChanged(fieldName)
}}}},registerFieldHintUpdateFn:function(fieldName,updateHintFn){if(rt.fieldUpdateHintFns[rt.currentPageName]===undefined){rt.fieldUpdateHintFns[rt.currentPageName]={}
}rt.fieldUpdateHintFns[rt.currentPageName][fieldName]=updateHintFn
},updateFieldHint:function(fieldName,hintHtml){if((rt.fieldUpdateHintFns[rt.currentPageName]!==undefined)&&(rt.fieldUpdateHintFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldUpdateHintFns[rt.currentPageName][fieldName](hintHtml);
rt.utilFieldSizeChanged(fieldName)
}},showActionButton:function(actionName,label){var fieldName="FORMACTION_"+actionName;
if((rt.fieldShowHideFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideFns[rt.currentPageName][fieldName](true,label);
rt.utilFieldSizeChanged(fieldName)
}},hideActionButton:function(actionName,label){var fieldName="FORMACTION_"+actionName;
if((rt.fieldShowHideFns[rt.currentPageName]!==undefined)&&(rt.fieldShowHideFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldShowHideFns[rt.currentPageName][fieldName](false,label);
rt.utilFieldSizeChanged(fieldName)
}},triggerActionButton:function(actionName,label){var fieldID=rt.formName+"_FORMACTION_"+actionName;
rt.utilTriggerClickEvent(fieldID,label)
},querySubmissionAction:function(){var actionName="";
if((rt.isServer())||(rt.isSkeleton())){if((rt.formData)&&(rt.formData._ACTION_)&&(rt.formData._ACTION_.actionName)){actionName=rt.formData._ACTION_.actionName
}}return actionName
},querySubmissionActionLabel:function(){var actionLabel="";
if((rt.isServer())||(rt.isSkeleton())){if((rt.formData)&&(rt.formData._ACTION_)&&(rt.formData._ACTION_.actionLabel)){actionLabel=rt.formData._ACTION_.actionLabel
}}return actionLabel
},getSubmissionHistory:function(){return rt.pageHistory
},registerFieldEnableDisableFn:function(fieldName,enableDisableFn){if(rt.fieldEnableDisableFns[rt.currentPageName]===undefined){rt.fieldEnableDisableFns[rt.currentPageName]={}
}rt.fieldEnableDisableFns[rt.currentPageName][fieldName]=enableDisableFn
},registerFieldEnableOnSubmitFn:function(fieldName,enableFn){if(rt.fieldEnableOnSubmitFns[rt.currentPageName]===undefined){rt.fieldEnableOnSubmitFns[rt.currentPageName]={}
}rt.fieldEnableOnSubmitFns[rt.currentPageName][fieldName]=enableFn
},enableField:function(fieldName){if((rt.fieldEnableDisableFns[rt.currentPageName]!==undefined)&&(rt.fieldEnableDisableFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldEnableDisableFns[rt.currentPageName][fieldName](true)
}},disableField:function(fieldName){if((rt.fieldEnableDisableFns[rt.currentPageName]!==undefined)&&(rt.fieldEnableDisableFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldEnableDisableFns[rt.currentPageName][fieldName](false)
}},enableActionButton:function(actionName,label){var fieldName="FORMACTION_"+actionName;
if((rt.fieldEnableDisableFns[rt.currentPageName]!==undefined)&&(rt.fieldEnableDisableFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldEnableDisableFns[rt.currentPageName][fieldName](true,label)
}},disableActionButton:function(actionName,label){var fieldName="FORMACTION_"+actionName;
if((rt.fieldEnableDisableFns[rt.currentPageName]!==undefined)&&(rt.fieldEnableDisableFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldEnableDisableFns[rt.currentPageName][fieldName](false,label)
}},registerFieldEventHandler:function(fieldName,eventField,handlerFn){if(rt.fieldEventHandlerFns[rt.currentPageName]===undefined){rt.fieldEventHandlerFns[rt.currentPageName]={}
}if(rt.fieldEventHandlerFns[rt.currentPageName][eventField]===undefined){rt.fieldEventHandlerFns[rt.currentPageName][eventField]=[]
}rt.fieldEventHandlerFns[rt.currentPageName][eventField].push({targetField:fieldName,handlerFn:handlerFn})
},registerGlobalEventHandler:function(fieldName,handlerFn){rt.globalEventHandlers.push({targetField:fieldName,handlerFn:handlerFn})
},registerErrorClearFn:function(fieldName,clearFn){if(rt.errorClearFns[rt.currentPageName]===undefined){rt.errorClearFns[rt.currentPageName]={}
}rt.errorClearFns[rt.currentPageName][fieldName]=clearFn
},errorClear:function(fieldName){var f,handledByGlobal=false;
for(f=0;
f<rt.globalErrorClearFns.length;
f++){if(rt.globalErrorClearFns[f](fieldName)){handledByGlobal=true
}}if(!handledByGlobal){if((rt.errorClearFns[rt.currentPageName]!==undefined)&&(rt.errorClearFns[rt.currentPageName][fieldName]!==undefined)){rt.errorClearFns[rt.currentPageName][fieldName]()
}}},errorClearAll:function(){var f,handledByGlobal=false;
for(f=0;
f<rt.globalErrorClearAllFns.length;
f++){if(rt.globalErrorClearAllFns[f]()){handledByGlobal=true
}}if(!handledByGlobal){if(rt.errorClearFns[rt.currentPageName]!==undefined){for(var fieldName in rt.errorClearFns[rt.currentPageName]){if(rt.errorClearFns[rt.currentPageName].hasOwnProperty(fieldName)){rt.errorClear(fieldName)
}}}}},registerErrorDisplayFn:function(fieldName,displayFn){if(rt.errorDisplayFns[rt.currentPageName]===undefined){rt.errorDisplayFns[rt.currentPageName]={}
}rt.errorDisplayFns[rt.currentPageName][fieldName]=displayFn
},errorDisplay:function(fieldName,valFailure,valFailures){var f,handledByGlobal=false;
for(f=0;
f<rt.globalErrorDisplayFns.length;
f++){if(rt.globalErrorDisplayFns[f](fieldName,valFailure,valFailures)){handledByGlobal=true
}}if(!handledByGlobal){if((rt.errorClearFns[rt.currentPageName]!==undefined)&&(rt.errorClearFns[rt.currentPageName][fieldName]!==undefined)){rt.errorDisplayFns[rt.currentPageName][fieldName](valFailure,valFailures)
}}},registerGlobalErrorClearAllFn:function(clearAllFn){rt.globalErrorClearAllFns.push(clearAllFn)
},registerGlobalErrorClearFn:function(clearFn){rt.globalErrorClearFns.push(clearFn)
},registerGlobalErrorDisplayFn:function(displayFn){rt.globalErrorDisplayFns.push(displayFn)
},registerFieldIDFn:function(fieldName,fieldIDFn){if(rt.fieldIDFns[rt.currentPageName]===undefined){rt.fieldIDFns[rt.currentPageName]={}
}rt.fieldIDFns[rt.currentPageName][fieldName]=fieldIDFn
},getFormID:function(){return rt.formName+"_FORM"
},getFieldsIDOuter:function(){return rt.formName+"__FIELDS_OUTER"
},getFieldID:function(fieldName){var fID="";
if((rt.fieldIDFns[rt.currentPageName]!==undefined)&&(rt.fieldIDFns[rt.currentPageName][fieldName]!==undefined)){fID=rt.fieldIDFns[rt.currentPageName][fieldName]()
}return fID
},getFieldIDOuter:function(fieldName){var fID=rt.getFieldID(fieldName);
if(fID!==""){fID=fID+"_OUTER"
}return fID
},registerFilterOptionsFn:function(fieldName,filterFn){if(rt.fieldFilterOptionsFns[rt.currentPageName]===undefined){rt.fieldFilterOptionsFns[rt.currentPageName]={}
}rt.fieldFilterOptionsFns[rt.currentPageName][fieldName]=filterFn
},filterOptions:function(fieldName,groupNames){if((rt.fieldFilterOptionsFns[rt.currentPageName]!==undefined)&&(rt.fieldFilterOptionsFns[rt.currentPageName][fieldName]!==undefined)){rt.fieldFilterOptionsFns[rt.currentPageName][fieldName](groupNames)
}},registerCustomFieldFn:function(fieldName,customFnName,customFn){if(rt.fieldCustomFns[rt.currentPageName]===undefined){rt.fieldCustomFns[rt.currentPageName]={}
}if(rt.fieldCustomFns[rt.currentPageName][fieldName]===undefined){rt.fieldCustomFns[rt.currentPageName][fieldName]={}
}rt.fieldCustomFns[rt.currentPageName][fieldName][customFnName]=customFn
},invokeCustomFn:function(customFnName){var ret,args,a;
if(rt.custom!==undefined){if(typeof rt.custom[customFnName]==="function"){args=[];
for(a=1;
a<arguments.length;
a++){args.push(arguments[a])
}try{ret=rt.custom[customFnName].apply(rt.custom,args)
}catch(ex){if(rt.debugInterface){rt.debugInterface.logFunctionError("JavaScript Error","Custom Function: ["+customFnName+"] ["+ex.message+"]",rt.custom[customFnName])
}throw ex
}}}return ret
},invokeCustomFieldFn:function(fieldName,customFnName){var args,a,ret;
if((rt.fieldCustomFns[rt.currentPageName]!==undefined)&&(rt.fieldCustomFns[rt.currentPageName][fieldName]!==undefined)&&(rt.fieldCustomFns[rt.currentPageName][fieldName][customFnName]!==undefined)){args=[];
for(a=2;
a<arguments.length;
a++){args.push(arguments[a])
}try{ret=rt.fieldCustomFns[rt.currentPageName][fieldName][customFnName].apply(rt,args)
}catch(ex){if(rt.debugInterface){rt.debugInterface.logFunctionError("JavaScript Error","Custom Field Function: ["+fieldName+":"+customFnName+"] ["+ex.message+"]",rt.fieldCustomFns[rt.currentPageName][fieldName][customFnName])
}throw ex
}}return ret
},registerVariableSetFn:function(name,fn){if(rt.variableChangedFns[name]==undefined){rt.variableChangedFns[name]=[]
}rt.variableChangedFns[name].push(fn)
},createPersistentVariable:function(name,value,scope){if((rt.variables[name]===undefined)&&(!rt.isClient())){if(!scope){scope=rt.VARIABLE_SERVERONLY
}if(scope!==rt.VARIABLE_NONPERSISTENT){rt.setVariable(name,value,scope)
}}},setVariable:function(name,value,scope){var cb;
if((!scope)||(rt.isClient())){scope=rt.VARIABLE_NONPERSISTENT
}if(rt.variables[name]!==undefined){rt.variables[name].value=value
}else{var v,n,bl=0,bestVarName="",fc;
for(n in rt.variables){if(name.indexOf(n)===0){if(n.length>bl){fc=name.substr(n.length)[0];
if((fc===".")||(fc==="[")){bestVarName=n;
bl=n.length
}}}}if(bestVarName){try{eval('rt.variables["'+bestVarName+'"].value'+name.substr(bestVarName.length)+"="+JSON.stringify(value));
value=rt.variables[bestVarName].value;
name=bestVarName
}catch(e){rt.trace("setPersistentVariable",name,value,e.message)
}}else{rt.variables[name]={"value":value,"scope":scope}
}}if(rt.isClient()){if(rt.variableChangedFns[name]!=undefined){rt.eventStack.push({eventName:rt.EVENT_CHANGE,fieldName:name});
for(cb=0;
cb<rt.variableChangedFns[name].length;
cb++){if(rt.debugInterface){rt.debugInterface.addEvent(rt.eventStack,name,rt.EVENT_CHANGE,value,true);
try{rt.variableChangedFns[name][cb](rt,name,value,true,rt.EVENT_CHANGE)
}catch(e){rt.debugInterface.addEventError(rt.eventStack,name,rt.EVENT_CHANGE,e.message);
rt.debugInterface.logFunctionError("JavaScript Error","Variable Event Handler: ["+name+":"+rt.EVENT_CHANGE+"] ["+e.message+"]",rt.variableChangedFns[name][cb])
}}else{rt.variableChangedFns[name][cb](rt,name,value,true,rt.EVENT_CHANGE)
}}rt.eventStack.pop()
}}},getVariable:function(name,defaultValue){var val=rt.variables[name];
if(val==undefined){var v,n,bl=0,bestVarName="",fc;
for(n in rt.variables){if(name.indexOf(n)===0){if(n.length>bl){fc=name.substr(n.length)[0];
if((fc===".")||(fc==="[")){bestVarName=n;
bl=n.length
}}}}if(bestVarName){try{val=eval('rt.variables["'+bestVarName+'"].value'+name.substr(bestVarName.length))
}catch(e){rt.trace("getVariable",name,e.message)
}}if((val==undefined)&&(defaultValue!=undefined)){val=defaultValue
}}else{val=val.value
}return val
},deleteVariable:function(name){return delete rt.variables[name]
},serializePersistentVariables:function(){var persistentVars={},name,vars=rt.variables;
for(name in vars){if(vars.hasOwnProperty(name)){if((vars[name].scope===rt.VARIABLE_SERVERONLY)||(vars[name].scope===rt.VARIABLE_SERVERCLIENT)||(vars[name].scope===rt.VARIABLE_SERVERCLIENTUPDATE)){persistentVars[name]=vars[name]
}}}return rt.utilEncode(JSON.stringify(persistentVars))
},serializePersistentVariablesForSubmit:function(){var persistentVars={},name,vars=rt.variables;
for(name in vars){if(vars.hasOwnProperty(name)){if(vars[name].scope===rt.VARIABLE_SERVERCLIENTUPDATE){persistentVars[name]=vars[name]
}}}return rt.utilEncode(JSON.stringify(persistentVars))
},deserializePersistentVariables:function(serializedData){if(!rt.variables){rt.variables={}
}var persistentVariables=JSON.parse(rt.utilDecode(serializedData));
if(persistentVariables){var name;
for(name in persistentVariables){if(persistentVariables.hasOwnProperty(name)){rt.variables[name]=persistentVariables[name]
}}}},filterSerializedPersistentVariablesForClient:function(serializedData){var filteredVars={},name,vars=JSON.parse(rt.utilDecode(serializedData));
for(name in vars){if(vars.hasOwnProperty(name)){if((vars[name].scope===rt.VARIABLE_SERVERCLIENT)||(vars[name].scope===rt.VARIABLE_SERVERCLIENTUPDATE)){filteredVars[name]=vars[name]
}}}return rt.utilEncode(JSON.stringify(filteredVars))
},mergePersistentVariablesFromClient:function(updatedSerializedData){var name,updatedVars,mergeNeeded=false;
for(name in rt.variables){if(rt.variables.hasOwnProperty(name)){if(rt.variables[name].scope===rt.VARIABLE_SERVERCLIENTUPDATE){mergeNeeded=true;
break
}}}if(mergeNeeded){updatedVars=JSON.parse(rt.utilDecode(updatedSerializedData));
for(name in updatedVars){if(updatedVars.hasOwnProperty(name)){if((rt.variables[name]!==undefined)&&(rt.variables[name].scope===rt.VARIABLE_SERVERCLIENTUPDATE)){rt.variables[name].value=updatedVars[name].value
}}}}},showBusy:function(fieldName,size){if(rt.BusySpinner){size=size||"DEFAULT";
var sizeObj=rt.busySpinnerSizes[size]?rt.busySpinnerSizes[size]:{};
rt.hideBusy();
var id=rt.getFieldsIDOuter();
if(fieldName){id=rt.getFieldIDOuter(fieldName)
}var opts={};
$.extend(opts,rt.busySpinnerOptions);
if(!opts.position){opts.position="relative";
opts.left="50%";
opts.top=String($("#"+id).innerHeight()/2)+"px"
}if((!opts.lines)&&(!opts.length)&&(!opts.width)&&(!opts.radius)){$.extend(opts,sizeObj)
}rt.currentBusySpinner=new rt.BusySpinner(opts);
rt.currentBusySpinner.spin(document.getElementById(id))
}},hideBusy:function(){if(rt.BusySpinner&&rt.currentBusySpinner){rt.currentBusySpinner.stop();
rt.currentBusySpinner=null
}},isBusyDisplayed:function(){return rt.currentBusySpinner?true:false
},setBusyOptions:function(options){if(options&&(typeof options==="object")){rt.busySpinnerOptions=options
}},setSubmissionBusyField:function(fieldName){rt.busySpinnerSubmitField=fieldName
},registerSimpleField:function(config){rt.registerFieldIDFn(config.fieldName,function(){return config.fieldID
});
if(config.supportShowHide){rt.registerFieldShowHideFn(config.fieldName,function(showHide){rt.utilShowHideField(config.fieldID+"_OUTER",showHide)
})
}if(config.supportShowHideHint){rt.registerFieldHintShowHideFn(config.fieldName,function(showHideHint){rt.utilShowHideFieldHint(config.fieldID,showHideHint)
})
}if(config.supportUpdateHint){rt.registerFieldHintUpdateFn(config.fieldName,function(hintHtml){rt.utilUpdateFieldHint(config.fieldID,hintHtml)
})
}},registerInputField:function(config){rt.registerFieldIDFn(config.fieldName,function(){return config.fieldID
});
rt.registerFieldQueryValueFn(config.fieldName,function(){return rt.utilGetInputValue(config.fieldID)
});
rt.registerFieldUpdateValueFn(config.fieldName,function(value){rt.utilSetInputValue(config.fieldID,value)
});
if(config.supportErrorDisplay){rt.registerErrorClearFn(config.fieldName,function(){rt.utilClearErrorBlock(config.fieldID,rt.isHighlightValidFields())
});
rt.registerErrorDisplayFn(config.fieldName,function(valFailure,valFailures){if($.isArray(valFailure.ERRMSG)){rt.utilDisplayErrorBlock(config.fieldID,valFailure.ERRMSG)
}else{rt.utilDisplayErrorBlock(config.fieldID,[valFailure.ERRMSG])
}})
}if(config.supportFocus){rt.registerFieldFocusFn(config.fieldName,function(){rt.utilFocusField(config.fieldID)
})
}if(config.supportShowHide){rt.registerFieldShowHideFn(config.fieldName,function(showHide){rt.utilShowHideField(config.fieldID+"_OUTER",showHide)
})
}if(config.supportShowHideHint){rt.registerFieldHintShowHideFn(config.fieldName,function(showHideHint){rt.utilShowHideFieldHint(config.fieldID,showHideHint)
})
}if(config.supportShowHideRequired){rt.registerFieldRequiredShowHideFn(config.fieldName,function(showRequired,requiredMarker,titleText){if(showRequired){rt.utilSetLabelRequiredFlag(config.fieldID,requiredMarker,titleText)
}else{rt.utilClearLabelRequiredFlag(config.fieldID)
}})
}if(config.supportUpdateHint){rt.registerFieldHintUpdateFn(config.fieldName,function(hintHtml){rt.utilUpdateFieldHint(config.fieldID,hintHtml)
})
}if(config.supportEnableDisable){rt.registerFieldEnableDisableFn(config.fieldName,function(enableDisable){rt.utilMakeReadOnlyField(config.fieldID,enableDisable)
})
}if(config.supportEvents){rt.registerFieldInitFn(config.fieldName,function(helper,pageName,pageInstance){if(pageInstance===0){helper.executeEventHandlers(config.fieldName,helper.EVENT_NEWPAGEINIT,false)
}else{helper.executeEventHandlers(config.fieldName,helper.EVENT_PAGEINIT,false)
}});
rt.registerFieldReadyFn(config.fieldName,function(helper,pageName,pageInstance){rt._utilInitAria(config.fieldID);
$("#"+config.fieldID).bind("change",function(event){helper.executeEventHandlers(config.fieldName,helper.EVENT_CHANGE,true)
})
})
}},registerCheckedInputField:function(config){rt.registerFieldIDFn(config.fieldName,function(){return config.fieldID
});
if(config.singleValue){rt.registerFieldQueryValueFn(config.fieldName,function(){var v=rt.utilGetCheckedInputValue(config.fieldID);
if(v.length===0){return""
}else{return v[0]
}})
}else{rt.registerFieldQueryValueFn(config.fieldName,function(){return rt.utilArrayToList(rt.utilGetCheckedInputValue(config.fieldID))
})
}rt.registerFieldUpdateValueFn(config.fieldName,function(value){rt.utilSetCheckedInputValue(config.fieldID,rt.utilListToArray(value))
});
if(config.supportErrorDisplay){rt.registerErrorClearFn(config.fieldName,function(){rt.utilClearErrorBlock(config.fieldID,rt.isHighlightValidFields())
});
rt.registerErrorDisplayFn(config.fieldName,function(valFailure,valFailures){if($.isArray(valFailure.ERRMSG)){rt.utilDisplayErrorBlock(config.fieldID,valFailure.ERRMSG)
}else{rt.utilDisplayErrorBlock(config.fieldID,[valFailure.ERRMSG])
}})
}if(config.supportFocus){rt.registerFieldFocusFn(config.fieldName,function(){rt.utilFocusCheckedField(config.fieldID)
})
}if(config.supportShowHide){rt.registerFieldShowHideFn(config.fieldName,function(showHide){rt.utilShowHideField(config.fieldID+"_OUTER",showHide)
})
}if(config.supportShowHideHint){rt.registerFieldHintShowHideFn(config.fieldName,function(showHideHint){rt.utilShowHideFieldHint(config.fieldID,showHideHint)
})
}if(config.supportUpdateHint){rt.registerFieldHintUpdateFn(config.fieldName,function(hintHtml){rt.utilUpdateFieldHint(config.fieldID,hintHtml)
})
}if(config.supportShowHideRequired){rt.registerFieldRequiredShowHideFn(config.fieldName,function(showRequired,requiredMarker,titleText){if(showRequired){rt.utilSetLegendRequiredFlag(config.fieldID,requiredMarker,titleText)
}else{rt.utilClearLegendRequiredFlag(config.fieldID)
}})
}if(config.supportEnableDisable){rt.registerFieldEnableDisableFn(config.fieldName,function(enableDisable){rt.utilEnableDisableField(config.fieldID,enableDisable)
});
rt.registerFieldEnableOnSubmitFn(config.fieldName,function(){rt.utilEnableDisableField(config.fieldID,true)
})
}if(config.supportEvents){rt.registerFieldInitFn(config.fieldName,function(helper,pageName,pageInstance){if(pageInstance===0){helper.executeEventHandlers(config.fieldName,helper.EVENT_NEWPAGEINIT,false)
}else{helper.executeEventHandlers(config.fieldName,helper.EVENT_PAGEINIT,false)
}});
rt.registerFieldReadyFn(config.fieldName,function(helper,pageName,pageInstance){rt._utilInitAria(config.fieldID);
$("[name="+config.fieldID+"]").bind("change",function(event){helper.executeEventHandlers(config.fieldName,helper.EVENT_CHANGE,true)
})
})
}},registerSelectInputField:function(config){rt.registerFieldIDFn(config.fieldName,function(){return config.fieldID
});
if(config.singleValue){rt.registerFieldQueryValueFn(config.fieldName,function(){var v=rt.utilGetSelectedInputValue(config.fieldID);
if(v.length===0){return""
}else{return v[0]
}})
}else{rt.registerFieldQueryValueFn(config.fieldName,function(){return rt.utilArrayToList(rt.utilGetSelectedInputValue(config.fieldID))
})
}rt.registerFieldUpdateValueFn(config.fieldName,function(value){rt.utilSetSelectedInputValue(config.fieldID,rt.utilListToArray(value))
});
if(config.supportErrorDisplay){rt.registerErrorClearFn(config.fieldName,function(){rt.utilClearErrorBlock(config.fieldID,rt.isHighlightValidFields())
});
rt.registerErrorDisplayFn(config.fieldName,function(valFailure,valFailures){if($.isArray(valFailure.ERRMSG)){rt.utilDisplayErrorBlock(config.fieldID,valFailure.ERRMSG)
}else{rt.utilDisplayErrorBlock(config.fieldID,[valFailure.ERRMSG])
}})
}if(config.supportFocus){rt.registerFieldFocusFn(config.fieldName,function(){rt.utilFocusField(config.fieldID)
})
}if(config.supportShowHide){rt.registerFieldShowHideFn(config.fieldName,function(showHide){rt.utilShowHideField(config.fieldID+"_OUTER",showHide)
})
}if(config.supportShowHideHint){rt.registerFieldHintShowHideFn(config.fieldName,function(showHideHint){rt.utilShowHideFieldHint(config.fieldID,showHideHint)
})
}if(config.supportUpdateHint){rt.registerFieldHintUpdateFn(config.fieldName,function(hintHtml){rt.utilUpdateFieldHint(config.fieldID,hintHtml)
})
}if(config.supportShowHideRequired){rt.registerFieldRequiredShowHideFn(config.fieldName,function(showRequired,requiredMarker,titleText){if(showRequired){rt.utilSetLabelRequiredFlag(config.fieldID,requiredMarker,titleText)
}else{rt.utilClearLabelRequiredFlag(config.fieldID)
}})
}if(config.supportEnableDisable){rt.registerFieldEnableDisableFn(config.fieldName,function(enableDisable){rt.utilEnableDisableField(config.fieldID,enableDisable)
});
rt.registerFieldEnableOnSubmitFn(config.fieldName,function(){rt.utilEnableDisableField(config.fieldID,true)
})
}if(config.optionData){rt.setVariable(config.fieldName+rt.OPTION_VARIABLE_SUFFIX,config.optionData);
rt.setVariable(config.fieldName+rt.OPTION_GROUP_VARIABLE_SUFFIX,null);
rt.registerFilterOptionsFn(config.fieldName,function(groupNames){rt.setVariable(config.fieldName+rt.OPTION_GROUP_VARIABLE_SUFFIX,groupNames)
});
rt.registerVariableSetFn(config.fieldName+rt.OPTION_VARIABLE_SUFFIX,function(helper,variableName,value,valid,eventName){var groups=rt.getVariable(config.fieldName+rt.OPTION_GROUP_VARIABLE_SUFFIX);
if(groups!=null){rt.utilFilterSelectOptions(config.fieldID,value,groups)
}else{rt.utilRefreshSelectOptions(config.fieldID,value)
}});
rt.registerVariableSetFn(config.fieldName+rt.OPTION_GROUP_VARIABLE_SUFFIX,function(helper,variableName,value,valid,eventName){if(value!=null){rt.utilFilterSelectOptions(config.fieldID,rt.getVariable(config.fieldName+rt.OPTION_VARIABLE_SUFFIX),value)
}else{rt.utilRefreshSelectOptions(config.fieldID,rt.getVariable(config.fieldName+rt.OPTION_VARIABLE_SUFFIX))
}})
}if(config.supportEvents){rt.registerFieldInitFn(config.fieldName,function(helper,pageName,pageInstance){if(pageInstance===0){helper.executeEventHandlers(config.fieldName,helper.EVENT_NEWPAGEINIT,false)
}else{helper.executeEventHandlers(config.fieldName,helper.EVENT_PAGEINIT,false)
}});
rt.registerFieldReadyFn(config.fieldName,function(helper,pageName,pageInstance){rt._utilInitAria(config.fieldID);
$("#"+config.fieldID).bind("change",function(event){helper.executeEventHandlers(config.fieldName,helper.EVENT_CHANGE,true)
})
})
}},registerButtonField:function(config){var eventHandler,b,actionID;
if((config.actionButtons===undefined)||(config.actionButtons.length===0)){rt.registerFieldIDFn(config.fieldName,function(){return config.fieldID
})
}else{rt.registerFieldIDFn(config.fieldName,function(){return config.fieldID
});
for(b=0;
b<config.actionButtons.length;
b++){actionID="FORMACTION_"+config.actionButtons[b];
rt.registerFieldIDFn(config.actionButtons[b],function(id){return function(){return rt.formName+"_"+id
}
}(actionID))
}}if(config.supportShowHide){rt.registerFieldShowHideFn(config.fieldName,function(showHide){rt.utilShowHideField(config.fieldID+"_OUTER",showHide)
});
if(config.actionButtons!==undefined){for(b=0;
b<config.actionButtons.length;
b++){actionID="FORMACTION_"+config.actionButtons[b];
rt.registerFieldShowHideFn(actionID,function(id){return function(showHide,label){rt.utilShowHideActionButtonField(rt.formName+"_"+id,showHide,label)
}
}(actionID))
}}}if(config.supportFocus){if((config.actionButtons===undefined)||(config.actionButtons.length===0)){rt.registerFieldFocusFn(config.fieldName,function(){rt.utilFocusField(config.fieldID)
})
}else{for(b=0;
b<config.actionButtons.length;
b++){actionID="FORMACTION_"+config.actionButtons[b];
rt.registerFieldFocusFn(actionID,function(id){return function(label){rt.utilFocusActionButtonField(rt.formName+"_"+id,label)
}
}(actionID))
}}}if(config.supportEnableDisable){if((config.actionButtons===undefined)||(config.actionButtons.length===0)){rt.registerFieldEnableDisableFn(config.fieldName,function(enableDisable){rt.utilEnableDisableButtonField(config.fieldID,enableDisable)
})
}else{for(b=0;
b<config.actionButtons.length;
b++){actionID="FORMACTION_"+config.actionButtons[b];
rt.registerFieldEnableDisableFn(actionID,function(id){return function(enableDisable,label){rt.utilEnableDisableButtonField(rt.formName+"_"+id,enableDisable,label)
}
}(actionID))
}}}},registerIcmPanelButton:function(icmPanelButtonInfo){if(icmPanelButtonInfo){rt.icmPanelButtons.push(icmPanelButtonInfo)
}},checkCircularEvents:function(fieldName,eventName){var circular=false,e,count=0;
for(e=0;
e<rt.eventStack.length;
e++){if((rt.eventStack[e].fieldName===fieldName)&&(rt.eventStack[e].eventName===eventName)){count+=1
}}if(count>1){circular=true
}return circular
},executeEventHandlers:function(fieldName,eventName,updateErrorDisplay){var h,valid,valFailures=[],value,theForm,handledByGlobal=false,errorDisplayRequired=false,eventDesc;
if((updateErrorDisplay)&&(rt.isAsYouTypeValidation())){errorDisplayRequired=true
}rt.eventStack.push({eventName:eventName,fieldName:fieldName});
if(!rt.checkCircularEvents(fieldName,eventName)){if(errorDisplayRequired){rt.errorClear(fieldName)
}theForm=$("#"+rt.formName+"_CONTROL").closest("form")[0];
valid=rt.validateField(fieldName,theForm,valFailures);
if((errorDisplayRequired)&&(!valid)){rt.errorDisplay(fieldName,valFailures[0],valFailures)
}for(h=0;
h<rt.globalEventHandlers.length;
h++){eventDesc=eventName+"(GLOBAL:"+rt.globalEventHandlers[h].targetField+")";
value=rt.queryFieldValue(fieldName);
if(rt.debugInterface){rt.debugInterface.addEvent(rt.eventStack,fieldName,eventDesc,value,valid);
try{if(rt.globalEventHandlers[h].handlerFn(rt,fieldName,value,valid,eventName)){handledByGlobal=true
}}catch(e){rt.debugInterface.addEventError(rt.eventStack,fieldName,eventDesc,e.message);
rt.debugInterface.logFunctionError("JavaScript Error","Global Event Handler: ["+fieldName+":"+eventDesc+"] ["+e.message+"]",rt.globalEventHandlers[h].handlerFn)
}}else{if(rt.globalEventHandlers[h].handlerFn(rt,fieldName,value,valid,eventName)){handledByGlobal=true
}}}if(!handledByGlobal){if(rt.fieldEventHandlerFns[rt.currentPageName]!==undefined){if(rt.fieldEventHandlerFns[rt.currentPageName][fieldName]!==undefined){for(h=0;
h<rt.fieldEventHandlerFns[rt.currentPageName][fieldName].length;
h++){value=rt.queryFieldValue(fieldName);
if(rt.debugInterface){rt.debugInterface.addEvent(rt.eventStack,fieldName,eventName,value,valid);
try{rt.fieldEventHandlerFns[rt.currentPageName][fieldName][h].handlerFn(rt,fieldName,value,valid,eventName)
}catch(e){rt.debugInterface.addEventError(rt.eventStack,fieldName,eventName,e.message);
rt.debugInterface.logFunctionError("JavaScript Error","Field Event Handler: ["+fieldName+":"+eventName+"] ["+e.message+"]",rt.fieldEventHandlerFns[rt.currentPageName][fieldName][h].handlerFn)
}}else{rt.fieldEventHandlerFns[rt.currentPageName][fieldName][h].handlerFn(rt,fieldName,value,valid,eventName)
}}}}}}else{if(rt.debugInterface){rt.debugInterface.addEventCircularError(rt.eventStack,fieldName,eventName)
}}if(rt.eventStack.length>0){rt.eventStack.pop()
}},executeAJAXHandlers:function(fieldName,valid,value){var h,eventName=rt.EVENT_CHANGE;
rt.eventStack.push({eventName:eventName,fieldName:fieldName});
if(!rt.checkCircularEvents(fieldName,eventName)){if(rt.fieldEventHandlerFns[rt.currentPageName]!==undefined){if(rt.fieldEventHandlerFns[rt.currentPageName][fieldName]!==undefined){for(h=0;
h<rt.fieldEventHandlerFns[rt.currentPageName][fieldName].length;
h++){if(rt.debugInterface){rt.debugInterface.addEvent(rt.eventStack,fieldName,eventName,JSON.stringify(value),valid);
try{rt.fieldEventHandlerFns[rt.currentPageName][fieldName][h].handlerFn(rt,fieldName,value,valid,eventName)
}catch(e){rt.debugInterface.addEventError(rt.eventStack,fieldName,eventName,e.message);
rt.debugInterface.logFunctionError("JavaScript Error","Field Event Handler: ["+fieldName+":"+eventName+"] ["+e.message+"]",rt.fieldEventHandlerFns[rt.currentPageName][fieldName][h].handlerFn)
}}else{rt.fieldEventHandlerFns[rt.currentPageName][fieldName][h].handlerFn(rt,fieldName,value,valid,eventName)
}}}}}else{if(rt.debugInterface){rt.debugInterface.addEventCircularError(rt.eventStack,fieldName,eventName)
}}if(rt.eventStack.length>0){rt.eventStack.pop()
}},utilEscValueSelector:function(v){if(!v){v=""
}v=String(v);
return v.replace(/([ !"#$%&'()*+,.\/:;<=>?@[\\]^`{|}~])/g,"\\$1")
},utilHtmlEsc:function(v){if(!v){v=""
}v=String(v);
return v.replace(/&/g,"&"+"amp;").replace(/>/g,"&"+"gt;").replace(/</g,"&"+"lt;")
},utilListToArray:function(list,allowBlanks){var i,valArray,retArray=[];
if(allowBlanks==undefined){allowBlanks=false
}if(list){list=String(list);
valArray=list.split(",");
for(i=0;
i<valArray.length;
i++){if((allowBlanks)||(valArray[i]!=="")){retArray.push(valArray[i])
}}}return retArray
},utilArrayToList:function(inputArray,allowBlanks){var i,retString="";
if(allowBlanks==undefined){allowBlanks=false
}if(inputArray){for(i=0;
i<inputArray.length;
i++){if((allowBlanks)||(inputArray[i]!="")){if(retString!==""){retString=retString+","
}retString=retString+inputArray[i]
}}}return retString
},utilFieldSizeChanged:function(fieldName){if(typeof parent.resizeFrame==="function"){parent.resizeFrame(document.body.scrollHeight)
}},_utilGetAriaTargetElement:function(fieldID){var fieldEl=$("#"+fieldID+"_OUTERDIV fieldset.icmbuttongroup");
if(fieldEl.length===0){fieldEl=$("#"+fieldID+"_OUTERDIV :input[type!=hidden][id="+fieldID+"]")
}if(fieldEl.length===0){fieldEl=$("#"+fieldID+"_OUTERDIV :input[type!=hidden]:first")
}if(fieldEl.length===0){fieldEl=$("#"+fieldID+"_OUTERDIV")
}return fieldEl.length===0?null:fieldEl
},_utilSetAriaRole:function(fieldID,targetEl){if(targetEl.attr("id")===fieldID+"_OUTERDIV"){$("#"+fieldID+"_OUTERDIV").attr("role","group");
$("#"+fieldID+"_OUTERDIV").attr("aria-label","field")
}},_utilGetAriaDescribedBy:function(fieldID){var descBy="",sel;
sel=$("#"+fieldID+"_OUTER [aria-describedby]");
if(sel.length!==0){descBy=sel.attr("aria-describedby")
}return descBy
},_utilSetAriaDescribedBy:function(fieldID,descBy){var targetEl;
$("#"+fieldID+"_OUTER [aria-describedby]").removeAttr("aria-describedby");
$("#"+fieldID+"_OUTER [aria-label]").removeAttr("aria-label");
$("#"+fieldID+"_OUTER [role]").removeAttr("role");
targetEl=rt._utilGetAriaTargetElement(fieldID);
if(targetEl&&descBy){targetEl.attr("aria-describedby",descBy);
rt._utilSetAriaRole(fieldID,targetEl)
}},_utilGetAriaInvalid:function(fieldID){var invalid=false,sel;
sel=$("#"+fieldID+"_OUTER [aria-invalid]");
if(sel.length!==0){invalid=sel.attr("aria-invalid")
}return invalid
},_utilSetAriaInvalid:function(fieldID,invalid){var targetEl;
$("#"+fieldID+"_OUTER [aria-invalid]").removeAttr("aria-invalid");
targetEl=rt._utilGetAriaTargetElement(fieldID);
if(targetEl&&invalid){targetEl.attr("aria-invalid","true");
rt._utilSetAriaRole(fieldID,targetEl)
}},_utilGetAriaRequired:function(fieldID){var required=false,sel;
sel=$("#"+fieldID+"_OUTER [aria-required]");
if(sel.length===0){sel=$("#"+fieldID+"_OUTER em[title='required']");
required=sel.length!==0?true:false
}else{required=sel.attr("aria-required")
}return required
},_utilSetAriaRequired:function(fieldID,required){var targetEl;
$("#"+fieldID+"_OUTER [aria-required]").removeAttr("aria-required");
targetEl=rt._utilGetAriaTargetElement(fieldID);
if(targetEl&&required){targetEl.attr("aria-required","true")
}},_utilInitAria:function(fieldID){rt._utilSetAriaDescribedBy(fieldID,rt._utilGetAriaDescribedBy(fieldID));
rt._utilSetAriaInvalid(fieldID,rt._utilGetAriaInvalid(fieldID)?true:false);
rt._utilSetAriaRequired(fieldID,rt._utilGetAriaRequired(fieldID)?true:false)
},utilDisplayErrorBlock:function(fieldID,messages){var ul,m,errId,descBy;
errId=fieldID+"_ERRORBLOCK";
$("#"+fieldID+"_ERRORBLOCK").remove();
$("#"+fieldID+"_OUTERDIV").removeClass("error clear valid");
$("#"+fieldID+"_OUTERDIV").addClass("error");
rt._utilSetAriaInvalid(fieldID,true);
descBy=rt._utilGetAriaDescribedBy(fieldID);
if(descBy){if(descBy.indexOf(errId)===-1){descBy=errId+" "+descBy
}}else{descBy=errId
}rt._utilSetAriaDescribedBy(fieldID,descBy);
$("#"+fieldID+"_OUTERDIV").prepend($("<div>",{"id":errId,"class":"errorblock","role":"alert"}));
ul=$("<ul>",{"role":"presentation"});
for(m=0;
m<messages.length;
m++){ul.append($("<li>").text(messages[m]))
}$("#"+errId).append(ul)
},utilClearErrorBlock:function(fieldID,markValid){var descBy,errId,i,errDescs,newDesc="";
errId=fieldID+"_ERRORBLOCK";
$("#"+fieldID+"_ERRORBLOCK").remove();
$("#"+fieldID+"_OUTERDIV").removeClass("error clear valid");
if(markValid){$("#"+fieldID+"_OUTERDIV").addClass("valid")
}else{$("#"+fieldID+"_OUTERDIV").addClass("clear")
}rt._utilSetAriaInvalid(fieldID,false);
descBy=rt._utilGetAriaDescribedBy(fieldID);
if(descBy){if((descBy.length===errId.length)&&(descBy.indexOf(errId)===0)){descBy=""
}else{errDescs=descBy.split(" ");
for(i=0;
i<errDescs.length;
i++){if(errDescs[i]!==errId){if(newDesc.length>0){newDesc=newDesc+" "
}newDesc=newDesc+errDescs[i]
}}descBy=newDesc
}}rt._utilSetAriaDescribedBy(fieldID,descBy)
},utilShowHideField:function(fieldID,show){if(show){$("[id="+fieldID+"]").show()
}else{$("[id="+fieldID+"]").hide()
}},utilShowHideFieldHint:function(fieldID,show){if(show){$("[id="+fieldID+"_HINT]").show()
}else{$("[id="+fieldID+"_HINT]").hide()
}},utilUpdateFieldHint:function(fieldID,hintHTML){var hintEle=$("#"+fieldID+"_HINT");
if(hintEle){hintHTML=hintHTML||"";
hintEle.html(rt.utilExpandTemplate(hintHTML))
}},utilMakeReadOnlyField:function(fieldID,readOnly){var sel;
if(readOnly){sel=$("[id="+fieldID+"][readonly]");
sel.removeAttr("readonly")
}else{sel=$("[id="+fieldID+"]:not([readonly])");
sel.attr("readonly","readonly")
}},utilFocusField:function(fieldID){$("#"+fieldID)[0].focus()
},utilFocusCheckedField:function(fieldID){$("[name="+fieldID+"]")[1].focus()
},utilShowHideActionButtonField:function(fieldID,show,label){var sel;
if(label){sel=$("[id="+fieldID+"][value='"+label+"']")
}else{sel=$("[id="+fieldID+"]")
}if(show){sel.show()
}else{sel.hide()
}},utilFocusActionButtonField:function(fieldID,label){var sel;
if(label){sel=$("[id="+fieldID+"][value='"+label+"']")
}else{sel=$("[id="+fieldID+"]")
}if(sel.length>0){sel[0].focus()
}},utilTriggerClickEvent:function(fieldID,label){var sel;
if(label){sel=$("[id="+fieldID+"][value='"+label+"']")
}else{sel=$("[id="+fieldID+"]")
}if(sel.length>0){sel[0].click()
}},utilEnableDisableButtonField:function(fieldID,enable,label){var sel;
if(enable){if(label){sel=$("[id="+fieldID+"][disabled][value='"+label+"']")
}else{sel=$("[id="+fieldID+"][disabled]")
}sel.removeAttr("disabled")
}else{if(label){sel=$("[id="+fieldID+"]:not([disabled])[value='"+label+"']")
}else{sel=$("[id="+fieldID+"]:not([disabled])")
}sel.attr("disabled","disabled")
}},utilEnableDisableField:function(fieldID,enable){var sel;
if(enable){sel=$("[name="+fieldID+"][disabled]");
sel.removeAttr("disabled")
}else{sel=$("[name="+fieldID+"]:not([disabled]):not([type=hidden])");
sel.attr("disabled","disabled")
}},utilGetInputValue:function(inputID){return $("input#"+inputID)[0].value
},utilSetInputValue:function(inputID,value){$("input#"+inputID)[0].value=value
},utilGetCheckedInputValue:function(inputID){var sel,values=[],i;
sel=$("[name="+inputID+"]:checked");
for(i=0;
i<sel.length;
i++){if(sel[i].value!==""){values.push(sel[i].value)
}}return values
},utilSetCheckedInputValue:function(inputID,valArray){var sel,i;
sel=$("[name="+inputID+"]:checked");
sel.removeAttr("checked");
for(i=0;
i<valArray.length;
i++){if(valArray[i]!==""){$("[name="+inputID+"][value="+rt.utilEscValueSelector(valArray[i])+"]").prop("checked",true)
}}},utilGetSelectedInputValue:function(inputID){var vals,values=[],v;
vals=$("#"+inputID).val();
if(vals){if(typeof vals==="string"){values.push(vals)
}else{for(v=0;
v<vals.length;
v++){values.push(String(vals[v]))
}}}return values
},utilSetSelectedInputValue:function(inputID,valArray){$("#"+inputID).val(valArray)
},utilSetLabelRequiredFlag:function(inputID,reqChar,reqTitle){reqChar=reqChar?reqChar:"*";
reqTitle=reqTitle?reqTitle:"required";
rt.utilClearLabelRequiredFlag(inputID);
var labelEle=$("#"+inputID+"LABEL");
if(labelEle){labelEle.append($("<em>",{"title":reqTitle}).text(reqChar));
rt._utilSetAriaRequired(inputID,true)
}},utilClearLabelRequiredFlag:function(inputID){$("#"+inputID+"LABEL > em").remove();
rt._utilSetAriaRequired(inputID,false)
},utilSetLegendRequiredFlag:function(inputID,reqChar,reqTitle){reqChar=reqChar?reqChar:"*";
reqTitle=reqTitle?reqTitle:"required";
rt.utilClearLegendRequiredFlag(inputID);
var spanEle=$("#"+inputID+"LABEL > span");
if(spanEle){spanEle.append($("<em>",{"title":reqTitle}).text(reqChar))
}},utilClearLegendRequiredFlag:function(inputID){var legendEle=$("#"+inputID+"LABEL");
if(legendEle){legendEle.find("em").remove()
}},utilFilterSelectOptions:function(inputID,optionData,groupNames){var sel,i,namesArray,fnGroupAllowed,fnSelected,selValues=[];
namesArray=rt.utilListToArray(groupNames,true);
fnGroupAllowed=function(groupName){var n,allowed=false;
for(n=0;
n<namesArray.length;
n++){if(namesArray[n]===groupName){allowed=true;
break
}}return allowed
};
selValues=rt.utilGetSelectedInputValue(inputID);
fnSelected=function(value){var v,selected=false;
for(v=0;
v<selValues.length;
v++){if(selValues[v]===value){selected=true;
break
}}return selected
};
sel=$("#"+inputID+" option,#"+inputID+" > optgroup");
sel.remove();
sel=$("#"+inputID);
for(i=0;
i<optionData.length;
i++){if(fnGroupAllowed(optionData[i][rt.OPTION_GROUP])){if(fnSelected(optionData[i][rt.OPTION_VALUE])){sel.append($("<option>",{value:optionData[i][rt.OPTION_VALUE],selected:"selected"}).text(optionData[i][rt.OPTION_DISPLAY]))
}else{sel.append($("<option>",{value:optionData[i][rt.OPTION_VALUE]}).text(optionData[i][rt.OPTION_DISPLAY]))
}}}},utilRefreshSelectOptions:function(inputID,optionData){var optionsEle,sel,curGroup="",i,fnSelected,selValues=[];
selValues=rt.utilGetSelectedInputValue(inputID);
fnSelected=function(value){var v,selected=false;
for(v=0;
v<selValues.length;
v++){if(selValues[v]===value){selected=true;
break
}}return selected
};
sel=$("#"+inputID+" option,#"+inputID+" > optgroup");
sel.remove();
optionsEle=$("#"+inputID);
sel=optionsEle;
for(i=0;
i<optionData.length;
i++){if(curGroup!==optionData[i][rt.OPTION_GROUP]){if(optionData[i][rt.OPTION_GROUP]!==""){sel=optionsEle.append($("<optgroup>",{label:optionData[i][rt.OPTION_GROUP]}))
}else{sel=optionsEle
}curGroup=optionData[i][rt.OPTION_GROUP]
}if(fnSelected(optionData[i][rt.OPTION_VALUE])){sel.append($("<option>",{value:optionData[i][rt.OPTION_VALUE],selected:"selected"}).text(optionData[i][rt.OPTION_DISPLAY]))
}else{sel.append($("<option>",{value:optionData[i][rt.OPTION_VALUE]}).text(optionData[i][rt.OPTION_DISPLAY]))
}}},utilExpandTemplate:function(template){var val=template,m,noEsc=false,userVals={};
if(typeof template==="string"){if(arguments.length>1){if(typeof arguments[1]==="boolean"){noEsc=arguments[1]
}else{if(typeof arguments[1]==="object"){userVals=arguments[1]
}}}if(arguments.length>2){if(typeof arguments[2]==="boolean"){noEsc=arguments[2]
}else{if(typeof arguments[2]==="object"){userVals=arguments[2]
}}}m=template.match(/#([A-Za-z0-9_\.]*)#/m);
while(m!=null){if(userVals.hasOwnProperty(m[1])){val=userVals[m[1]]
}else{val=rt.queryFieldValue(m[1])
}if(!noEsc){val=rt.utilHtmlEsc(val)
}template=template.replace(/#[A-Za-z0-9_\.]*#/m,val);
m=template.match(/#([A-Za-z0-9_\.]*)#/m)
}}return template
},utilExpandJSONTemplate:function(template){var val=template,m,userVals={};
if(typeof template==="string"){if(arguments.length>1){if(typeof arguments[1]==="object"){userVals=arguments[1]
}}m=template.match(/#([A-Za-z0-9_\.]*)#/m);
while(m!=null){if(userVals.hasOwnProperty(m[1])){val=String(userVals[m[1]])
}else{val=rt.queryFieldValue(m[1])
}val=val.replace(/\\/g,"\\\\").replace(/\"/g,'\\"');
template=template.replace(/#[A-Za-z0-9_\.]*#/m,val);
m=template.match(/#([A-Za-z0-9_\.]*)#/m)
}m=template.match(/%([A-Za-z0-9_\.\[\]]*)%/m);
while(m!=null){val=String(rt.getVariable(m[1],""));
val=val.replace(/\\/g,"\\\\").replace(/\"/g,'\\"');
template=template.replace(/%[A-Za-z0-9_\.\[\]]*%/m,val);
m=template.match(/%([A-Za-z0-9_\.\[\]]*)%/m)
}}return template
},utilCreateAction:function(fieldName,actionName){return{actionName:actionName,fieldName:fieldName,actionProps:{}}
},utilAddActionProperty:function(actionObject,name,value){actionObject.actionProps[name]=value;
return actionObject
},utilSetStopActionProcessingAfterHandling:function(actionObject,shouldStop){shouldStop=(typeof shouldStop==="undefined"||shouldStop===null)?true:shouldStop;
rt.utilAddActionProperty(actionObject,"_STOPACTIONPROCESSINGAFTERHANDLING_",shouldStop);
return actionObject
},utilSetActionExecuteSkeleton:function(actionObject,skelName){if(skelName===undefined){if(actionObject.actionProps["_EXECUTESKELETON_"]!==undefined){delete actionObject.actionProps["_EXECUTESKELETON_"]
}}else{actionObject.actionProps["_EXECUTESKELETON_"]=skelName
}return actionObject
},utilSetPostRedirectActionExecuteSkeleton:function(actionObject,skelName){if(skelName===undefined){if(actionObject.actionProps["_POSTREDIRECTEXECUTESKELETON_"]!==undefined){delete actionObject.actionProps["_POSTREDIRECTEXECUTESKELETON_"]
}}else{actionObject.actionProps["_POSTREDIRECTEXECUTESKELETON_"]=skelName
}return actionObject
},utilSetNotificationActionExecuteSkeleton:function(actionObject,skelName){if(skelName===undefined){if(actionObject.actionProps["_NOTIFICATIONEXECUTESKELETON_"]!==undefined){delete actionObject.actionProps["_NOTIFICATIONEXECUTESKELETON_"]
}}else{actionObject.actionProps["_NOTIFICATIONEXECUTESKELETON_"]=skelName
}return actionObject
},utilAddAction:function(actionObj,optionalParentFieldName,contextVariables){var parentFieldName=(typeof arguments[1]==="string")?arguments[1]:null;
contextVariables=(typeof arguments[1]==="object")?arguments[1]:arguments[2];
var userVars=contextVariables["USER"],props="",i,insertIndex=-1,fieldNameToType,existingActions;
if(userVars===undefined){contextVariables["USER"]={};
userVars=contextVariables["USER"]
}if(parentFieldName!=null){existingActions=userVars["ACTIONS"].split(",");
for(i=0;
i<existingActions.length;
i++){fieldNameToType=existingActions[i].split(":");
if(fieldNameToType[0]===parentFieldName){insertIndex=i;
break
}}}rt.utilRemoveAction(actionObj.fieldName,contextVariables);
for(var propName in actionObj.actionProps){if(actionObj.actionProps.hasOwnProperty(propName)){userVars["ACTION_"+actionObj.fieldName+":"+propName]=actionObj.actionProps[propName];
if(props===""){props=propName
}else{props=props+","+propName
}}}userVars["ACTION_"+actionObj.fieldName]=props;
if((userVars["ACTIONS"]===undefined)||(userVars["ACTIONS"]==="")){userVars["ACTIONS"]=actionObj.fieldName+":"+actionObj.actionName
}else{if(parentFieldName==null){userVars["ACTIONS"]=userVars["ACTIONS"]+","+actionObj.fieldName+":"+actionObj.actionName
}else{if(insertIndex==-1){userVars["ACTIONS"]=userVars["ACTIONS"]+","+actionObj.fieldName+":"+actionObj.actionName
}else{existingActions=userVars["ACTIONS"].split(",");
existingActions.splice(insertIndex,0,actionObj.fieldName+":"+actionObj.actionName)
}userVars["ACTIONS"]=existingActions.join(",")
}}},utilRemoveAllActions:function(contextVariables){var i,actions=rt.utilQueryActions(Context);
for(i=0;
i<actions.length;
i++){rt.utilRemoveAction(actions[i].fieldName,Context)
}},utilRemoveAction:function(fieldName,contextVariables){var userVars=contextVariables["USER"],currentActions=rt.utilQueryActions(contextVariables),a,props,p,actions,i,newActions,m;
for(a=0;
a<currentActions.length;
a++){if(currentActions[a].fieldName===fieldName){props=rt.utilQueryActionProperties(fieldName,contextVariables);
for(p=0;
p<props.length;
p++){delete userVars["ACTION_"+fieldName+":"+props[p].name]
}delete userVars["ACTION_"+fieldName];
newActions="";
actions=userVars["ACTIONS"].split(",");
for(i=0;
i<actions.length;
i++){m=actions[i].match(/^(.*):(.*)$/);
if((m!=null)&&(m.length===3)){if(m[1]!==fieldName){if(newActions===""){newActions=actions[i]
}else{newActions=newActions+","+actions[i]
}}}}userVars["ACTIONS"]=newActions;
break
}}},utilQueryActions:function(contextVariables){var actions=[],userVars=contextVariables["USER"],a,i,m;
if((userVars!==undefined)&&(userVars["ACTIONS"]!==undefined)){a=userVars["ACTIONS"].split(",");
for(i=0;
i<a.length;
i++){m=a[i].match(/^(.*):(.*)$/);
if((m!=null)&&(m.length===3)){actions.push({fieldName:m[1],actionName:m[2]})
}}}return actions
},utilQueryActionProperties:function(fieldName,contextVariables){var props=[],userVars=contextVariables["USER"],p,i;
if((userVars!==undefined)&&(userVars["ACTION_"+fieldName]!==undefined)){p=userVars["ACTION_"+fieldName].split(",");
for(i=0;
i<p.length;
i++){props.push({name:p[i],value:userVars["ACTION_"+fieldName+":"+p[i]]})
}}return props
},utilRemoveActionProperty:function(fieldName,propertyName,contextVariables){var props="",userVars=contextVariables["USER"],p,i;
if((userVars!==undefined)&&(userVars["ACTION_"+fieldName]!==undefined)){p=userVars["ACTION_"+fieldName].split(",");
for(i=0;
i<p.length;
i++){if(p[i]===propertyName){delete userVars["ACTION_"+fieldName+":"+p[i]]
}else{if(props===""){props=p[i]
}else{props=props+","+p[i]
}}}userVars["ACTION_"+fieldName]=props
}},utilRemoveActionExecuteSkeleton:function(fieldName,contextVariables){rt.utilRemoveActionProperty(fieldName,"_EXECUTESKELETON_",contextVariables)
},utilQueryActionExecuteSkeleton:function(fieldName,contextVariables){var props=rt.utilQueryActionProperties(fieldName,contextVariables),p,skelName=undefined;
for(p=0;
p<props.length;
p++){if(props[p].name==="_EXECUTESKELETON_"){skelName=props[p].value;
break
}}return skelName
},utilQueryPostRedirectActionExecuteSkeleton:function(fieldName,contextVariables){var props=rt.utilQueryActionProperties(fieldName,contextVariables),p,skelName=undefined;
for(p=0;
p<props.length;
p++){if(props[p].name==="_POSTREDIRECTEXECUTESKELETON_"){skelName=props[p].value;
break
}}return skelName
},utilQueryNotificationActionExecuteSkeleton:function(fieldName,contextVariables){var props=rt.utilQueryActionProperties(fieldName,contextVariables),p,skelName=undefined;
for(p=0;
p<props.length;
p++){if(props[p].name==="_NOTIFICATIONEXECUTESKELETON_"){skelName=props[p].value;
break
}}return skelName
},utilCreateConfMessageAction:function(fieldName,message){var actionObject=rt.utilCreateAction(fieldName,"CONFMESSAGE");
rt.utilAddActionProperty(actionObject,"CLASS","form, com.gossinteractive.community.form.actions.ConfirmationAction");
rt.utilAddActionProperty(actionObject,"MESSAGE",message);
return actionObject
},utilAddStandardHandlebarsHelpers:function(hb){if(hb){hb.registerHelper("FIELD",function(fieldName){return rt.utilHtmlEsc(rt.queryFieldValue(fieldName))
});
hb.registerHelper("RAWFIELD",function(fieldName){return new hb.SafeString(rt.queryFieldValue(fieldName))
});
hb.registerHelper("VARIABLE",function(variableName){return rt.utilHtmlEsc(rt.getVariable(variableName))
});
hb.registerHelper("RAWVARIABLE",function(variableName){return new hb.SafeString(rt.getVariable(variableName))
});
hb.registerHelper("log",function(ctx){rt.trace(ctx)
})
}},utilLoadScript:function(filename,onloadedCB){rt.trace("utilLoadScript: "+filename);
var scriptRef=document.createElement("script");
scriptRef.setAttribute("type","text/javascript");
scriptRef.setAttribute("src",filename);
scriptRef.setAttribute("id",rt.utilHash(filename));
if(onloadedCB){if(scriptRef.addEventListener){scriptRef.addEventListener("load",onloadedCB,false)
}else{if(scriptRef.readyState){scriptRef.attachEvent("onreadystatechange",function(){if(scriptRef.readyState=="loaded"||scriptRef.readyState=="complete"){scriptRef.onreadystatechange=null;
onloadedCB()
}})
}}}document.getElementsByTagName("head")[0].appendChild(scriptRef)
},utilLoadScripts:function(requiredScripts,onloadedCB,item){var hash,el,parentObj;
var elistner=function(){item++;
if(item<requiredScripts.length){rt.utilLoadScripts(requiredScripts,onloadedCB,item)
}else{onloadedCB()
}};
item=item||0;
hash=rt.utilHash(requiredScripts[item].src);
el=document.getElementById(hash);
if(el!==null){parentObj=requiredScripts[item].parentObj||window;
if(typeof parentObj[requiredScripts[item].global]=="undefined"){if(el.addEventListener){el.addEventListener("load",elistner,false)
}else{if(el.readyState){el.attachEvent("onreadystatechange",elistner)
}}}else{elistner()
}}else{rt.utilLoadScript(requiredScripts[item].src,elistner)
}},utilLoadCSS:function(filename){rt.trace("utilLoadCSS: "+filename);
var hash,el;
hash=rt.utilHash(filename,"css");
el=document.getElementById(hash);
if(el===null){var linkRef=document.createElement("link");
linkRef.setAttribute("rel","stylesheet");
linkRef.setAttribute("type","text/css");
linkRef.setAttribute("id",hash);
linkRef.setAttribute("href",filename);
document.getElementsByTagName("head")[0].appendChild(linkRef)
}},utilHash:function(input,prefix){var hash=0,i,chr,len,pf=prefix||"icm";
if(input.length==0){return hash
}for(i=0,len=input.length;
i<len;
i++){chr=input.charCodeAt(i);
hash=((hash<<5)-hash)+chr;
hash|=0
}return pf+hash
},utilEncode:function(input){var output="";
var chr1,chr2,chr3,enc1,enc2,enc3,enc4;
var i=0;
input=rt.utilUtf8Encode(input);
while(i<input.length){chr1=input.charCodeAt(i++);
chr2=input.charCodeAt(i++);
chr3=input.charCodeAt(i++);
enc1=chr1>>2;
enc2=((chr1&3)<<4)|(chr2>>4);
enc3=((chr2&15)<<2)|(chr3>>6);
enc4=chr3&63;
if(isNaN(chr2)){enc3=enc4=64
}else{if(isNaN(chr3)){enc4=64
}}output=output+rt.ENCODER_STRING.charAt(enc1)+rt.ENCODER_STRING.charAt(enc2)+rt.ENCODER_STRING.charAt(enc3)+rt.ENCODER_STRING.charAt(enc4)
}return output
},utilDecode:function(input){var output="";
var chr1,chr2,chr3;
var enc1,enc2,enc3,enc4;
var i=0;
input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");
while(i<input.length){enc1=rt.ENCODER_STRING.indexOf(input.charAt(i++));
enc2=rt.ENCODER_STRING.indexOf(input.charAt(i++));
enc3=rt.ENCODER_STRING.indexOf(input.charAt(i++));
enc4=rt.ENCODER_STRING.indexOf(input.charAt(i++));
chr1=(enc1<<2)|(enc2>>4);
chr2=((enc2&15)<<4)|(enc3>>2);
chr3=((enc3&3)<<6)|enc4;
output=output+String.fromCharCode(chr1);
if(enc3!=64){output=output+String.fromCharCode(chr2)
}if(enc4!=64){output=output+String.fromCharCode(chr3)
}}output=rt.utilUtf8Decode(output);
return output
},utilUtf8Encode:function(string){var utftext="";
for(var n=0;
n<string.length;
n++){var c=string.charCodeAt(n);
if(c<128){utftext+=String.fromCharCode(c)
}else{if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128)
}else{utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128)
}}}return utftext
},utilUtf8Decode:function(utftext){var string="";
var i=0;
var c=0;
var c1=0;
var c2=0;
var c3=0;
while(i<utftext.length){c=utftext.charCodeAt(i);
if(c<128){string+=String.fromCharCode(c);
i++
}else{if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);
string+=String.fromCharCode(((c&31)<<6)|(c2&63));
i+=2
}else{c2=utftext.charCodeAt(i+1);
c3=utftext.charCodeAt(i+2);
string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));
i+=3
}}}return string
},utilRemovePageData:function(sessionData,pageName,pageInstance){var deleteCount=0,cv,p,updatedCV;
if((sessionData)&&(sessionData.CURRENTVALUES)&&(pageName)){pageInstance=(pageInstance!==undefined)?pageInstance:-1;
cv=sessionData.CURRENTVALUES;
if(pageInstance===-1){updatedCV=[];
for(p=0;
p<cv.length;
p++){if(cv[p].PAGENAME!==pageName){updatedCV.push(cv[p])
}else{deleteCount+=1
}}sessionData.CURRENTVALUES=updatedCV
}else{for(p=0;
p<cv.length;
p++){if((cv[p].PAGENAME===pageName)&&(cv[p].PAGEINSTANCE===pageInstance)){cv.splice(p,1);
deleteCount=1;
break
}}}}return deleteCount
},utilServerAPIServerCall:function(worker,methodName,params,advanced){if(rt.isClient()){rt.trace("utilServerAPIServerCall can only be invoked on the server.");
throw new Error("utilServerAPIServerCall can only be invoked on the server.")
}var callResult={};
var reqID=methodName+"_call";
var rawMode=false;
var url="",options={"internal":true};
if(advanced){url=advanced.url?advanced.url:url;
options=advanced.options?advanced.options:options;
rawMode=advanced.rawMode?true:false
}if(url){url=url+"/"+worker
}else{url=worker
}if(!rt.utilIsAPIServerDefined(reqID)){rt.utilCreateAPIServer(reqID,url,options)
}rt.utilInvokeAPIServer(reqID,methodName,params,function(result){if(rawMode){callResult=result
}else{if((result!==null)&&(typeof result==="object")&&(result.error)){var errorMessage;
if((typeof result.error==="object")&&(result.error.message)){errorMessage=result.error.message
}else{errorMessage=result.error
}if(!errorMessage){errorMessage=methodName
}rt.trace(errorMessage,result);
throw new Error(errorMessage)
}if((result!==null)&&(typeof result==="object")&&(result.result)){callResult=result.result
}else{if((worker==="icmapi")&&(result!==null)&&(typeof result==="object")&&(result.data)){if(result.data.multipleItemData){callResult=result.data.multipleItemData
}else{if(result.data.itemData){callResult=result.data.itemData
}else{callResult=result.data
}}}else{callResult=result
}}}},function(resp,errorMessage){if(!errorMessage){errorMessage="Exception invoking: "+methodName
}rt.trace(errorMessage,resp);
throw new Error(errorMessage)
});
return callResult
},utilCreateAPIServer:function(name,url,options){var callDetails={url:url,apiKey:options.apiKey?options.apiKey:"",user:options.user?options.user:"",password:options.password?options.password:"",currentToken:"",forceJSONP:options.forceJSONP?true:false,internal:options.internal?true:false};
rt.apiServerCalls[name]=callDetails;
return callDetails
},utilIsAPIServerDefined:function(name){return rt.apiServerCalls[name]?true:false
},utilInvokeAPIServer:function(name,method,params,okCB,errorCB){var callDetails=rt.apiServerCalls[name];
if(callDetails){if(rt.isClient()){rt._utilPerformJQueryAPIServerCall(callDetails,method,params,okCB,errorCB)
}else{rt._utilPerformTeaJSAPIServerCall(callDetails,method,params,okCB,errorCB)
}}},_utilPerformTeaJSAPIServerCall:function(callDetails,method,params,okCB,errorCB){var apiclient=require("apiclient");
if(!callDetails.client){var options={servicePath:callDetails.url,apiKey:callDetails.apiKey,user:callDetails.user,password:callDetails.password};
if(callDetails.internal){options.serverid=rt.getServerid()
}callDetails.client=new apiclient.ApiClient(options)
}try{var resp=callDetails.client.invoke(method,params);
if(resp){if(resp.error){if(errorCB){errorCB(resp,resp.error.message)
}}else{if(resp.result!==undefined){if(okCB){okCB(resp.result)
}}else{if(errorCB){errorCB(resp,"Unexpected response")
}}}}else{if(errorCB){errorCB({},"No response received")
}}}catch(err){if(errorCB){errorCB(err,"Exception: "+err.message)
}}},_utilPerformJQueryAPIServerCall:function(callDetails,method,params,okCB,errorCB){var headers,urlExt;
if((!$.support.cors)||(callDetails.forceJSONP)){if(callDetails.currentToken==""){urlExt="";
if(callDetails.apiKey){urlExt="&x-api-key="+callDetails.apiKey
}if(callDetails.user&&callDetails.password){urlExt=urlExt+"&user="+callDetails.user+"&password="+callDetails.password
}}else{urlExt="&x-api-token="+callDetails.currentToken
}$.ajax({type:"GET",url:callDetails.url,dataType:"jsonp",contentType:"application/json; charset=UTF-8",data:"jsonrpc="+JSON.stringify({"jsonrpc":"2.0","id":new Date().getTime().toString(),"method":method,"params":params})+urlExt,success:function(resp,textStatus,jqXHR){if(typeof resp.error!=="undefined"){callDetails.currentToken="";
if(errorCB){errorCB(resp,resp.error.message)
}}else{if((resp._transport_)&&(resp._transport_["statusCode"]!==200)){if(resp._transport_["statusCode"]===401){if(callDetails.currentToken===""){if(errorCB){errorCB(resp,"Authorisation failure - Status 401")
}}else{callDetails.currentToken="";
rt._utilPerformJQueryAPIServerCall(callDetails,method,params,okCB,errorCB)
}}else{callDetails.currentToken="";
if(errorCB){errorCB(resp,"["+resp._transport_["statusCode"]+"] "+resp._transport_["message"])
}}}else{if((resp._transport_)&&(resp._transport_["x-api-token"])){callDetails.currentToken=resp._transport_["x-api-token"]
}else{callDetails.currentToken=""
}if(resp.result!==undefined){if(okCB){okCB(resp.result)
}}else{callDetails.currentToken="";
if(errorCB){errorCB(resp,"No result property in response")
}}}}},error:function(jqXHR,errMsg){callDetails.currentToken="";
if(errorCB){errorCB({},"HTTP Error: "+errMsg)
}}})
}else{headers={};
if(callDetails.currentToken==""){if(callDetails.apiKey){headers["x-api-key"]=callDetails.apiKey
}}else{if(callDetails.currentToken!==""){headers["x-api-token"]=callDetails.currentToken
}}$.ajax({type:"POST",url:callDetails.url,dataType:"json",contentType:"application/json; charset=UTF-8",headers:headers,data:JSON.stringify({"jsonrpc":"2.0","id":new Date().getTime().toString(),"method":method,"params":params}),beforeSend:function(xhr){if((callDetails.currentToken==="")&&callDetails.user&&callDetails.password){xhr.setRequestHeader("Authorization","Basic "+rt.utilEncode(callDetails.user+":"+callDetails.password))
}},success:function(resp,textStatus,jqXHR){if(typeof resp.error!=="undefined"){callDetails.currentToken="";
if(errorCB){errorCB(resp,resp.error.message)
}}else{if((resp._transport_)&&(resp._transport_["statusCode"]!==200)){if(resp._transport_["statusCode"]===401){if(callDetails.currentToken===""){if(errorCB){errorCB(resp,"Authorisation failure - Status 401")
}}else{callDetails.currentToken="";
rt._utilPerformJQueryAPIServerCall(callDetails,method,params,okCB,errorCB)
}}else{callDetails.currentToken="";
if(errorCB){errorCB(resp,"["+resp._transport_["statusCode"]+"] "+resp._transport_["message"])
}}}else{if(resp.result){callDetails.currentToken=jqXHR.getResponseHeader("x-api-token");
if(callDetails.currentToken==null){callDetails.currentToken=""
}if(okCB){okCB(resp.result)
}}else{callDetails.currentToken="";
if(errorCB){errorCB(resp,"No result property in response")
}}}}},error:function(jqXHR,errMsg,errorThrown){callDetails.currentToken="";
if(errorCB){errorCB(errorThrown,"HTTP Error: "+errMsg)
}}})
}}};
if(existingProperties){for(var extPropName in existingProperties){if(existingProperties.hasOwnProperty(extPropName)){rt[extPropName]=existingProperties[extPropName]
}}}if(rt.isClient()){if(typeof $!=="function"){rt.jqueryLoadUrl=rt.JQUERY_2;
rt.jqueryUILoadUrl=rt.JQUERY_UI_FOR_JQUERY_2;
rt.jqueryUICSSLoadUrl=rt.JQUERYUI_CSS_FOR_JQUERY_2;
rt.utilLoadScript(rt.jqueryLoadUrl,function(){rt.jqueryLoaded=true;
rt.utilLoadScript(rt.jqueryUILoadUrl,function(){rt.jqueryUILoaded=true;
$(document).ready(rt.ready)
})
});
rt.utilLoadCSS(rt.jqueryUICSSLoadUrl)
}else{if(!$.ui){var ver=$.fn.jquery.split(".");
var majorVer=parseInt(ver[0]);
var minorVer=parseInt(ver[1]);
if((majorVer>1)||((majorVer===1)&&(minorVer>=9))){rt.jqueryUILoadUrl=rt.JQUERY_UI_FOR_JQUERY_2;
rt.jqueryUICSSLoadUrl=rt.JQUERYUI_CSS_FOR_JQUERY_2
}else{rt.jqueryUILoadUrl=rt.JQUERY_UI;
rt.jqueryUICSSLoadUrl=rt.JQUERYUI_CSS
}rt.utilLoadScript(rt.jqueryUILoadUrl,function(){rt.jqueryUILoaded=true;
$(document).ready(rt.ready)
});
rt.utilLoadCSS(rt.jqueryUICSSLoadUrl)
}else{$(document).ready(rt.ready)
}}}else{if(rt.serializedPersistentVariables){rt.deserializePersistentVariables(rt.serializedPersistentVariables)
}rt.customReady()
}return rt
};
