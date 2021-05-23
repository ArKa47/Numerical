import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

let data = {
    "swagger": "2.0",
    "info": {
      "description": "Numerical web page by 6104062630310 Aphisit Setang ",
      "version": "1.0.0",
      "title": "Swagger management"
    },
    "host": "my-json-server.typicode.com/ArKa47/api",
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
      "http"
    ],
    //
      "paths": {
        "/root_of_equation/bisec": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "Bisection",
                "description": "",
                "operationId": "bisec",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                },
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/root_of_equation/falsi": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "False Position",
                "description": "",
                "operationId": "falsi",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/root_of_equation/newton": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "Newton",
                "description": "",
                "operationId": "newton",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/root_of_equation/secant": {
            "get": {
                "tags": [
                "Root of Equation"
                ],
                "summary": "secant",
                "description": "",
                "operationId": "secant",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/matrix/cram": {
            "get": {
                "tags": [
                "Matrix"
                ],
                "summary": "crammer rule",
                "description": "",
                "operationId": "crammer",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/matrix/gauss": {
            "get": {
                "tags": [
                "Matrix"
                ],
                "summary": "gauss elimination",
                "description": "",
                "operationId": "gauss",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/matrix/gauss_jordan": {
            "get": {
                "tags": [
                "Matrix"
                ],
                "summary": "gauss-jordan",
                "description": "",
                "operationId": "gauss_jordan",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/matrix/lu_decom": {
            "get": {
                "tags": [
                "Matrix"
                ],
                "summary": "lu decomposition",
                "description": "",
                "operationId": "lu_decom",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/interpolation/newton_interpolation": {
            "get": {
                "tags": [
                "Interpolation"
                ],
                "summary": "newton interpolation",
                "description": "",
                "operationId": "newton",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/interpolation/lagrange": {
            "get": {
                "tags": [
                "Interpolation"
                ],
                "summary": "lagrange interpolation",
                "description": "",
                "operationId": "lagrange",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
        "/interpolation/spline": {
            "get": {
                "tags": [
                "Interpolation"
                ],
                "summary": "spline interpolation",
                "description": "",
                "operationId": "spline",
                "responses": {
                "200": {
                    "description": "Valid input"
                }
                }
            },
            /*
            "get": {
                "tag":[
                    "Root of Equation"
                ],
            }*/
        },
    },
    //
  }

function swag ()
{
    return(
        //<SwaggerUI url="https://petstore.swagger.io/v2/swagger" />
        <SwaggerUI spec={data}/>
    )
}


export default swag ;