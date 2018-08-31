"""
    Generate Python client library from an OpenAPI Specification

    HTTP POST request to Swagger online generator passing the OpenAPI specification in body as
    follows:
        {
            "options": {},
            "spec": <openapi_spec>
        }

    Generator returns URL as "link" property in the response. The URL is a download of the 
    Python library zipped.
"""

import json
import urllib3
import argparse
import ssl

parser = argparse.ArgumentParser(description='Generate the Python client library using the OpenAPI Specification')
parser.add_argument('file', help='path to the generated OpenAPI Specification file')
args = parser.parse_args()

openapi_data = ""
with open(args.file) as openapi_file:
    openapi_data = json.load(openapi_file)

req_body = json.dumps({
    "options": {},
    "spec": openapi_data
})

http = urllib3.PoolManager(cert_reqs=ssl.CERT_NONE)
urllib3.disable_warnings()
response = http.request('POST', 'https://generator.swagger.io/api/gen/clients/python',
    headers={'Content-Type': 'application/json'},
    body=req_body)

print response.data
