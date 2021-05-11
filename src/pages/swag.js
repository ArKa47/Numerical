import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

let data = {
    "swagger": "2.0",
    "info": {
      "description": "Numerical web page by 6104062630310 Aphisit Setang ",
      "version": "1.0.0",
      "title": "Swagger management"
    },
    "host": "https://my-json-server.typicode.com/ArKa47/api",
    "tags": [
      {
        "name": "Root of Equation",
        "description": "♫",
        "externalDocs": {
          "description": "All api used in Root of Equation",
        }
      },
      {
        "name": "Matrix",
        "description": "♫",
        "externalDocs": {
          "description": "All api used in Matrix",
        }
      },
      {
        "name": "Interpolation",
        "description": "♫",
        "externalDocs": {
          "description": "Interpolation",
        }
      }
    ],
    "schemes": [
      "https",
      "http"
    ],
    //
      "paths": {
        "/A path to Bisection": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "Bisection",
                "description": "",
                "operationId": "bisec",
                "consumes": [
                "application/json",
                "application/xml"
                ],
                "produces": [
                "application/xml",
                "application/json"
                ],
                "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "",
                    "required": false,
                    "schema": {
                    "properties": {
                        "Function": {
                        "type": "string",
                        "example": "x^4-13"
                        },
                        "xl": {
                            "type": "integer",
                            "example": "1.5"
                        },
                        "xr": {
                            "type": "integer",
                            "example": "2.0"
                        },
                        "interval": {
                            "type": "integer",
                            "example": "1"
                        },
                        "Epsilon": {
                            "type": "integer",
                            "example": "0.000001"
                        }
                    }
                    }
                }
                ],
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
                "security": [
                {
                    "petstore_auth": [
                    "write:pets",
                    "read:pets"
                    ]
                }
                ]
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/A path to False Position": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "False Position",
                "description": "",
                "operationId": "falsi",
                "consumes": [
                "application/json",
                "application/xml"
                ],
                "produces": [
                "application/xml",
                "application/json"
                ],
                "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "",
                    "required": false,
                    "schema": {
                    "properties": {
                        "Function": {
                        "type": "string",
                        "example": "x^4-13"
                        },
                        "xl": {
                            "type": "integer",
                            "example": "1.5"
                        },
                        "xr": {
                            "type": "integer",
                            "example": "2.0"
                        },
                        "interval": {
                            "type": "integer",
                            "example": "1"
                        },
                        "Epsilon": {
                            "type": "integer",
                            "example": "0.000001"
                        }
                    }
                    }
                }
                ],
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
                "security": [
                {
                    "petstore_auth": [
                    "write:pets",
                    "read:pets"
                    ]
                }
                ]
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/A path to Newthon Rhapson": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "Newton",
                "description": "",
                "operationId": "newton",
                "consumes": [
                "application/json",
                "application/xml"
                ],
                "produces": [
                "application/xml",
                "application/json"
                ],
                "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "",
                    "required": false,
                    "schema": {
                    "properties": {
                        "Function": {
                        "type": "string",
                        "example": "x^4-13"
                        },
                        "initial x": {
                            "type": "integer",
                            "example": "1"
                        },
                        "interval": {
                            "type": "integer",
                            "example": "1"
                        },
                        "Range": {
                            "type": "integer",
                            "example": "5"
                        }
                    }
                    }
                }
                ],
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
                "security": [
                {
                    "petstore_auth": [
                    "write:pets",
                    "read:pets"
                    ]
                }
                ]
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/A path to Secant Method": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "secant",
                "description": "",
                "operationId": "secant",
                "consumes": [
                "application/json",
                "application/xml"
                ],
                "produces": [
                "application/xml",
                "application/json"
                ],
                "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "",
                    "required": false,
                    "schema": {
                    "properties": {
                        "Function": {
                        "type": "string",
                        "example": "x^4-13"
                        },
                        "x1": {
                            "type": "integer",
                            "example": "1"
                        },
                        "x2": {
                            "type": "integer",
                            "example": "4"
                        },
                        "interval": {
                            "type": "integer",
                            "example": "1"
                        },
                        "Range": {
                            "type": "integer",
                            "example": "5"
                        }
                    }
                    }
                }
                ],
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
                "security": [
                {
                    "petstore_auth": [
                    "write:pets",
                    "read:pets"
                    ]
                }
                ]
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/A path to crammer": {
            "get": {
                "tags": [
                "Matrix"
                ],
                "summary": "crammer",
                "description": "",
                "operationId": "crammer",
                "consumes": [
                "application/json",
                "application/xml"
                ],
                "produces": [
                "application/xml",
                "application/json"
                ],
                "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "",
                    "required": false,
                    "schema": {
                    "properties": {
                        "Array Size": {
                            "type": "integer",
                            "example": "3"
                        },
                        "Array": {
                            "type": "integer",
                            "example": "2 4 -1 = 1 | 4 0 7 = 4 | 1 1 -1 = 0"
                        },
                    }
                    }
                }
                ],
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
                "security": [
                {
                    "petstore_auth": [
                    "write:pets",
                    "read:pets"
                    ]
                }
                ]
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/A path to newton": {
            "get": {
                "tags": [
                "Interpolation"
                ],
                "summary": "newton interpolation",
                "description": "",
                "operationId": "newton",
                "consumes": [
                "application/json",
                "application/xml"
                ],
                "produces": [
                "application/xml",
                "application/json"
                ],
                "parameters": [
                {
                    "in": "body",
                    "name": "body",
                    "description": "",
                    "required": false,
                    "schema": {
                    "properties": {
                        "x": {
                            "type": "integer",
                            "example": "7"
                        },
                        "Array Size": {
                            "type": "integer",
                            "example": "4"
                        },
                        "Array": {
                            "type": "integer",
                            "example": "{5,12}, {6,13}, {9,14}, {11,16}"
                        },
                    }
                    }
                }
                ],
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
                "security": [
                {
                    "petstore_auth": [
                    "write:pets",
                    "read:pets"
                    ]
                }
                ]
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        }
    },
    //
    "securityDefinitions": {
      "petstore_auth": {
        "type": "oauth2",
        "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
        "flow": "implicit",
        "scopes": {
          "write:pets": "modify pets in your account",
          "read:pets": "read your pets"
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    },
  }

function App ()
{
    return(
        //<SwaggerUI url="https://petstore.swagger.io/v2/swagger" />
        <SwaggerUI spec={data}/>
    )
}

export default App ;