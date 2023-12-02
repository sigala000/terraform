import React from 'react';
import Image1 from '../src/assets/1.png'
import Image2 from '../src/assets/2.png'
import Image3 from '../src/assets/3.png'
import Image4 from '../src/assets/4.png'
function Page1() {
    return ( 
        <div>
         <p>UNDERSTANDING TERRAFORM</p>
         <h2>What Is Terraform?</h2>
         <span>HashiCorp Terraform is an infrastructure as code tool 
         that lets you define both cloud and on-prem resources in 
         human-readable configuration files that you can version,
          reuse, and share. You can then use a consistent workflow
           to provision and manage all of your infrastructure 
           throughout its lifecycle. Terraform can manage low-level
            components like compute, storage, and networking resources, 
            as well as high-level components like DNS entries and SaaS features.</span>
            <img src={Image1} alt=''/>
            <br/>
            <span><b>Popular IaC Tools:</b></span>
            <ol>
               <li>Terraform An open-source declarative tool that offers pre-written modules to build and manage an infrastructure.</li>
               <li>Chef: A configuration management tool that uses cookbooks and recipes to deploy the desired environment. Best used for Deploying and configuring applications using a pull-based approach.</li>
               <li>Puppet: Popular tool for configuration management that follows a Client-Server Model. Puppet needs agents to be deployed on the target machines before the puppet can start managing them.</li>
               <li>Ansible: Ansible is used for building infrastructure as well as deploying and configuring applications on top of them. Best used for Ad hoc analysis.</li>
               <li>Packer: Unique tool that generates VM images (not running VMs) based on steps you provide. Best used for Baking compute images.</li>
               <li>Vagrant: Builds VMs using a workflow. Best used for Creating pre-configured developer VMs within VirtualBox.</li>
            </ol>
            <span><b>Benefits of using Terraform:</b></span>
            <ul>
               <li>Does orchestration, not just configuration management</li>
               <li>Supports multiple providers such as AWS, Azure, Oracle, GCP, and many more</li>
               <li>Provide immutable infrastructure where configuration changes smoothly</li>
               <li>Uses easy to understand language, HCL (HashiCorp configuration language)</li>
               <li>Easily portable to any other provider</li>
            </ul>
            <h1>Terraform Lifecycle</h1>
            <p>Terraform lifecycle consists of init, plan, apply, and destroy.</p>
            <img src={Image2} alt=''/>
            <ol>
               <li>Terraform init initializes the (local) Terraform environment. Usually executed only once per session.</li>
               <li>Terraform plan compares the Terraform state with the as-is state in the cloud, build and display an execution plan. This does not change the deployment (read-only).</li>
               <li>Terraform apply executes the plan. This potentially changes the deployment.</li>
               <li>Terraform destroy deletes all resources that are governed by this specific terraform environment.</li>

            </ol>
            <h1>Terraform Core Concepts</h1>
            <ol>
            <li>Variables: Terraform has input and output variables, it is a key-value pair. Input variables are used as parameters to input values at run time to customize our deployments. Output variables are return values of a terraform module that can be used by other configurations.
            Read our blog on Terraform Variables</li>
            <li>Provider: Terraform users provision their infrastructure on the major cloud providers such as AWS, Azure, OCI, and others. A provider is a plugin that interacts with the various APIs required to create, update, and delete various resources.
            Read our blog to know more about Terraform Providers</li>
            <li>Module: Any set of Terraform configuration files in a folder is a module. Every Terraform configuration has at least one module, known as its root module.</li>
            <li>State: Terraform records information about what infrastructure is created in a Terraform state file. With the state file, Terraform is able to find the resources it created previously, supposed to manage and update them accordingly.</li>
            <li>Resources: Cloud Providers provides various services in their offerings, they are referenced as Resources in Terraform. Terraform resources can be anything from compute instances, virtual networks to higher-level components such as DNS records. Each resource has its own attributes to define that resource.</li>
            <li>Data Source: Data source performs a read-only operation. It allows data to be fetched or computed from resources/entities that are not defined or managed by Terraform or the current Terraform configuration.</li>
            <li>Plan: It is one of the stages in the Terraform lifecycle where it determines what needs to be created, updated, or destroyed to move from the real/current state of the infrastructure to the desired state.</li>
            <li>Apply: It is one of the stages in the Terraform lifecycle where it applies the changes real/current state of the infrastructure in order to achieve the desired state.</li>
            </ol>
            <h1>How does Terraform work?</h1>
            <p>Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs). Providers enable Terraform to work with virtually any platform or service with an accessible API.</p>
            <img src={Image3} alt=''/>
            <span>HashiCorp and the Terraform community have already written thousands of providers to manage many different types of resources and services. You can find all publicly available providers on the Terraform Registry, including Amazon Web Services (AWS), Azure, Google Cloud Platform (GCP), Kubernetes, Helm, GitHub, Splunk, DataDog, and many more.</span>
            <p>The core Terraform workflow consists of three stages:</p>
            <ul>
              <li>Write: You define resources, which may be across multiple cloud providers and services. For example, you might create a configuration to deploy an application on virtual machines in a Virtual Private Cloud (VPC) network with security groups and a load balancer</li>
              <li>Plan: Terraform creates an execution plan describing the infrastructure it will create, update, or destroy based on the existing infrastructure and your configuration.</li>
              <li>Apply: On approval, Terraform performs the proposed operations in the correct order, respecting any resource dependencies. For example, if you update the properties of a VPC and change the number of virtual machines in that VPC, Terraform will recreate the VPC before scaling the virtual machines.</li>
            </ul>
            <img src={Image4} alt=''/>
        </div>
     );
}

export default Page1;