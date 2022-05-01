#/bin/bash

aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/x6h1l7u2

docker build -t foifacil .

docker tag foifacil:latest public.ecr.aws/x6h1l7u2/foifacil:latest

docker push public.ecr.aws/x6h1l7u2/foifacil:latest