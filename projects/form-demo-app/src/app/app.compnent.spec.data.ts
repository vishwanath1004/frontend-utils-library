export const sampleData = [
    {
        "name": "title",
        "label": "Session title",
        "value": "",
        "type": "text",
        "placeHolder": "Ex. Name of your session",
        "errorMessage": {
            "required": "Enter session title here",
            "minlength":"Min length should be 5",
        },
        "validators": {
            "required": false,
        }
    },
    {
        "name": "description",
        "label": "Description",
        "value":"",
        "type": "textarea",
        "placeHolder": "Tell the community something about your session",
        "errorMessage": {
            "required": "Enter description"
        },
        "validators": {
            "required": false,
            "maxLength": 255
        }
    },
    {
        "name": "password",
        "label": "Enter the password",
        "value":"",
        "type": "password",
        "placeHolder": "Type your password here",
        "errorMessage": {
            "required": "Password is required",
        },
        "validators": {
            "required": false,
        }
    },
    {
        "name": "location",
        "label": "Select your location",
        "value":"",
        "type": "select",
        "errorMessage": {
            "required": "Please select your location"
        },
        "validators": {
            "required": false
        },
        "options": [
            {
                "label": "Andhra Pradesh",
                "value": "ap"
            },
            {
                "label": "Arunachal Pradesh",
                "value": "ar"
            },
            {
                "label": "Assam",
                "value": "as"
            },
            {
                "label": "Bihar",
                "value": "br"
            },
            {
                "label": "Chhattisgarh",
                "value": "cg"
            },
            {
                "label": "Goa",
                "value": "ga"
            },
        ],
        "meta": {
            "entityType": "location",
            "errorLabel": "Location"
        },
        "multiple": false
    },
    {
        "name": "recommended_for",
        "label": "Recommended for",
        "value":"",
        "type": "chip",
        "disabled": false,
        "errorMessage": {
            "required": "Enter recommended for"
        },
        "validators": {
            "required": false
        },
        "options": [
            {
                "label": "Block education officer",
                "value": "beo"
            },
            {
                "label": "Cluster officials",
                "value": "co"
            },
            {
                "label": "District education officer",
                "value": "deo"
            },
            {
                "label": "Head master",
                "value": "hm"
            },
            {
                "label": "Teacher",
                "value": "te"
            }
        ],
        "meta": {
            "entityType": "recommended_for",
            "addNewPopupHeader": "Recommended for",
            "addNewPopupSubHeader": "Who is this session for?",
            "showSelectAll": true,
            "showAddOption": true
        },
        "multiple": true
    },
    {
        "name": "start_date",
        "label": "Start date",
        "value":"",
        "displayFormat": "dd/MM/yyyy hh:mm a",
        "dependedChild": "end_date",
        "type": "date",
        "placeHolder": "YYYY-MM-DD hh:mm",
        "errorMessage": {
            "required": "Enter start date"
        },
        "validators": {
            "required": false
        }
    },
    {
        "name": "end_date",
        "label": "End date",
        "value":"",
        "displayFormat": "dd/MM/yyyy hh:mm a",
        "dependedParent": "start_date",
        "type": "date",
        "placeHolder": "End date",
        "errorMessage": {
            "required": "Enter end date"
        },
        "validators": {
            "required": false
        }
    },
    {
        "name": "range_value",
        "label": "Range Input",
        "value":"",
        "type": "range",
        "min": "0",
        "max": "50",
        "step": "1",
        "placeHolder": "Select a range value",
        "errorMessage": {
            "required": "Select a value"
        },
        "validators": {
            "required": false
        },
        "showThumbLabel":true
    },
    {
        "name": "rating",
        "label": "Rating Option",
        "value":"",
        "type": "rating",
        "errorMessage": {
            "required": "Select a rating value"
        },
        "validators": {
            "required": false
        },
        "noOfstars":5
    },
    {
        "name": "categories",
        "label": "Checkbox Input",
        "value":"",
        "type": "checkbox",
        "errorMessage": {
            "required": "Select a category"
        },
        "validators": {
            "required": false
        },
        "options": [
            {
                "label": "Block education officer",
                "value": "beo"
            },
            {
                "label": "Cluster officials",
                "value": "co"
            },
            {
                "label": "District education officer",
                "value": "deo"
            },
            {
                "label": "Head master",
                "value": "hm"
            },
            {
                "label": "Teacher",
                "value": "te"
            },
            {
                "label": "District education officer",
                "value": "deo"
            },
            {
                "label": "Head master",
                "value": "hm"
            },
            {
                "label": "Teacher",
                "value": "te"
            }
        ]
    },
    {
        "name": "gender",
        "label": "Radio Input",
        "value":"",
        "type": "radio",
        "errorMessage": {
            "required": "Select a value"
        },
        "validators": {
            "required": true
        },
        "options": [
            {
                "label": "Male",
                "value": "m"
            },
            {
                "label": "female",
                "value": "f"
            },
            {
                "label": "not to disclose",
                "value": "n"
            }
        ]
    },
    {
        "name": "accept",
        "label": "Toggle option",
        "value": false,
        "type": "toggle",
        "errorMessage": {
            "required": "You need to accept"
        },
        "validators": {
            "required": false
        }
    },
    {
        "name": "languages",
        "label": "Dynamic language input",
        "value": [],
        "type": "dynamic",
        "placeHolder": "Enter your language",
        "errorMessage": {
            "required": "Enter the language",
        },
        "validators": {
            "required": false,
            "minLength":3
        }
    },
]