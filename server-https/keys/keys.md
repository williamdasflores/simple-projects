## Generate the PKI Infrastrucutre



openssl genrsa -out ca-key.pem
openssl req -new -x509 -sha256 -days 365 -key ca-key.pem -out ca-cert.crt

openssl genrsa -out server-key.key 2048
openssl req -new -key server-key.key -out server-csr.csr
openssl x509 -req -in server-csr.csr -CA ca-cert.crt -CAkey ca-key.pem -out server-cert.crt -days 365 -sha256

Copy and paste "server-key.key" and "server-cert.crt" files to the keys folder