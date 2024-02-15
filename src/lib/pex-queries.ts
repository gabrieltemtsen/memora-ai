const PRESENTATION_DEFINITION = {
    "id": "vp_combined_email_user_profile_combined",
    "submission_requirements": [
      {
        "rule": "pick",
        "min": 8,
        "from": "A"
      }
    ],
    "input_descriptors": [
      {
        "id": "email_vc",
        "name": "Email VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "Email"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.email"
              ],
              "purpose": "Check if VC contains email field",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "country_vc",
        "name": "Country VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITCountry"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.country"
              ]
            }
          ]
        }
      },
      {
        "id": "givenname_vc",
        "name": "Givenname VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITGivenName"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.givenName"
              ]
            }
          ]
        }
      },
      {
        "id": "family_vc",
        "name": "Family VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITFamilyName"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.familyName"
              ]
            }
          ]
        }
      },
      {
        "id": "phone_vc",
        "name": "Phone VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITPhoneNumber"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.phoneNumber"
              ]
            }
          ]
        }
      },
      {
        "id": "postal_vc",
        "name": "Postal VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITPostalCode"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.postalCode"
              ]
            }
          ]
        }
      },
      {
        "id": "address_vc",
        "name": "Address VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITStreetAddress"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.streetAddress"
              ]
            }
          ]
        }
      },
      {
        "id": "picture_vc",
        "name": "Picture VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITPicture"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.picture"
              ]
            }
          ]
        }
      },
      {
        "id": "birthdate_vc",
        "name": "Birthdate VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITBirthdate"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.birthdate"
              ]
            }
          ]
        }
      },
      {
        "id": "locality_vc",
        "name": "Locality VC",
        "purpose": "Check if data contains necessary fields",
        "group": [
          "A"
        ],
        "constraints": {
          "fields": [
            {
              "path": [
                "$.type"
              ],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITLocality"
                }
              }
            },
            {
              "path": [
                "$.credentialSubject.locality"
              ]
            }
          ]
        }
      }
    ]
  }

const ID_TOKEN_MAPPING = [
    {
      "sourceField": "$.credentialSubject.email",
      "idTokenClaim": "email",
      "inputDescriptorId": "email_vc"
    },
    {
      "sourceField": "$.credentialSubject.country",
      "idTokenClaim": "country",
      "inputDescriptorId": "country_vc"
    },
    {
      "sourceField": "$.credentialSubject.givenName",
      "idTokenClaim": "givenName",
      "inputDescriptorId": "givenname_vc"
    },
    {
      "sourceField": "$.credentialSubject.familyName",
      "idTokenClaim": "familyName",
      "inputDescriptorId": "family_vc"
    },
    {
      "sourceField": "$.credentialSubject.phoneNumber",
      "idTokenClaim": "phoneNumber",
      "inputDescriptorId": "phone_vc"
    },
    {
      "sourceField": "$.credentialSubject.birthdate",
      "idTokenClaim": "birthdate",
      "inputDescriptorId": "birthdate_vc"
    },
    {
      "sourceField": "$.credentialSubject.picture",
      "idTokenClaim": "picture",
      "inputDescriptorId": "picture_vc"
    },
    {
      "sourceField": "$.credentialSubject.postalCode",
      "idTokenClaim": "postalCode",
      "inputDescriptorId": "postal_vc"
    },
    {
      "sourceField": "$.credentialSubject.streetAddress",
      "idTokenClaim": "streetAddress",
      "inputDescriptorId": "address_vc"
    },
    {
      "sourceField": "$.credentialSubject.locality",
      "idTokenClaim": "locality",
      "inputDescriptorId": "locality_vc"
    }
  ]