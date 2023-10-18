# Hale
Healthcare Website 

-----------------------------------------------------
## 2 . Commands;
Red Hat-based Linux distributions like Red Hat Enterprise Linux (RHEL), CentOS, and Fedora use the yum package manager (and more recently dnf in newer versions of RHEL and Fedora) to manage software packages.

- ***Update the System:***
```sudo yum update```

or with `dnf`:
```sudo dnf update```

- ***Install a Package:***
```sudo yum install package_name```

or with `dnf`:
```sudo dnf install package_name```

     Replace package_name with the name of the package you want to install.

- ***Remove a Package:***
```sudo yum remove package_name```

or with `dnf`:
```sudo dnf remove package_name```

- ***Search for a Package:***
```sudo yum search keyword```

or with `dnf`:
```sudo dnf search keyword```

- ***List Installed Packages:***
```sudo yum list installed```

or with `dnf`:
```sudo dnf list installed```

- ***Enable a Service (Start at Boot):***
```bash :sudo systemctl enable service_name```
   Enables a service to start automatically at boot.

- ***Start/Stop/Restart a Service:***
```sudo systemctl start service_name sudo systemctl stop service_name sudo systemctl restart service_name```
   Manages services (replace service_name with the actual service name).

- ***Check System Logs:***
```journalctl```
   Displays the system journal and logs.

- ***Check Disk Space:***
```bash : df -h```

- ***Check Memory and CPU Usage:***
```c: free -h```

- ***Network Configuration:***
```ip addr show```

- ***Firewall Configuration:***
```sudo firewall-cmd --list-all```

## Note: 
Remember to replace package_name and service_name with the actual names of packages and services you want to interact with. Always use sudo to execute administrative commands to ensure proper permissions.
 Additionally, consult the man pages (```man command_name```) for more detailed information about specific commands and their options.




For further more details : 
- Redhat Openshift Documentation : https://docs.openshift.com/
- Redhat customer portal: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8
